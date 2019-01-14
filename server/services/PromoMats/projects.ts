import { getDocumentById, getDocumentRelationships, getRelatedDocuments, getDocumentCountryAndProductInfo } from './api';
import { VQL } from './constants';
import { convertProjectData } from './utils/convertProjectData';

export const getProjectById = async (req, res) => {
  try {
    const { document: rootDocument } = await getDocumentById(req.params.id);
    const { data: relationships } = await getDocumentRelationships(rootDocument.id);
    let relatedDocuments = [];

    const filteredTargetDocIds = relationships
      .filter(({ relationship_type__v: relType }) => (
        [VQL.RelationshipType.ASSEMBLER, VQL.RelationshipType.COMPONENTS, VQL.RelationshipType.RELATED_DOCUMENTS].includes(relType)
      ))
      .map(({ target_doc_id__v: targetDocId }) => targetDocId);

    if (filteredTargetDocIds.length) {
      ({ data: relatedDocuments } = await getRelatedDocuments(filteredTargetDocIds));
    }

    const {
      data: [{
        [VQL.DocumentObject.PRODUCT]: {
          data: products,
        },
        [VQL.DocumentObject.COUNTRY]: {
          data: countries,
        },
      }],
    } = await getDocumentCountryAndProductInfo(rootDocument.id);

    res.send({
      responseStatus: 'SUCCESS',
      data: convertProjectData(rootDocument, products, countries, relatedDocuments),
    });
  } catch (err) {
    res.send({
      errors: Array.isArray(err) ? err : [err],
      responseStatus: 'FAILURE',
    });
  }
};
