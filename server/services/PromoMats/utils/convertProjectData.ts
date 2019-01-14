import { sliceAndReplaceKeys } from './sliceAndReplaceKeys';

const rootDocumentFields = {
  id: 'id',
  name__v: 'name',
  document_number__v: 'number',
  language__v: 'language',
  country__v: 'country',
  product__v: 'product',
};

const relatedDocumentFields = {
  id: 'id',
  name__v: 'name',
  document_number__v: 'number',
  type__v: 'type',
  subtype__v: 'subtype',
  classification__v: 'classification',
};

export function convertProjectData(
  rootDocument,
  rootDocumentProducts,
  rootDocumentCountries,
  relatedDocuments,
) {
  const convertedRootDocument = sliceAndReplaceKeys(rootDocument, rootDocumentFields);
  convertedRootDocument.product = rootDocumentProducts.map(({ name__v }) => name__v);
  convertedRootDocument.country = rootDocumentCountries.map(({ name__v }) => name__v);

  const convertedRelatedDocuments = relatedDocuments.reduce(
    (acc, relatedDocument) => {
      const convertedRelatedDocument = sliceAndReplaceKeys(relatedDocument, relatedDocumentFields);
      acc[relatedDocument.id] = convertedRelatedDocument;

      return acc;
    },
    {},
  );

  return {
    rootDocument: convertedRootDocument,
    relatedDocuments: convertedRelatedDocuments,
  };
}
