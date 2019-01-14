import * as rpn from 'request-promise-native';
import { getBaseUrl, VQL } from '../constants';
import { isSuccessfulResponse } from '../utils/index';

export const request = async (options) => {
  const fullOptions = {
    baseUrl: getBaseUrl,
    method: 'GET',
    ...options,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
      Authorization: (request as any).sessionId, // tslint:disable-line
      ...options.headers,
    },
    json: true,
    resolveWithFullResponse: true,
  };

  const res = await rpn(fullOptions);

  if (!isSuccessfulResponse(res)) {
    throw res.body.errors;
  }

  return res.body;
};

request.init = function (sessionId) {
  (request as any).sessionId = sessionId; // tslint:disable-line
};

export async function getDocumentById(documentId: number, documentVersion?: string) {
  const remoteVersion = (documentVersion || '').replace(/\./, '/');

  return request({
    url: remoteVersion
      ? `/objects/documents/${documentId}/versions/${remoteVersion.replace(/\./, '/')}`
      : `/objects/documents/${documentId}`,
  });
}

export async function getDocumentRelationships(id: number) {
  return getDataByQuery(
    `SELECT ${VQL.USED_RELATIONSHIP_FIELDS_AS_STRING} ` +
    `FROM ${VQL.VaultObject.RELATIONSHIPS} ` +
    `WHERE ${VQL.RelationshipField.SOURCE_DOC_ID} = ${id}`,
  );
}

export async function getRelatedDocuments(relatedDocumentIds: number[]) {
  const relatedDocumentIdsAsString = relatedDocumentIds.join();

  return getDataByQuery(
    `SELECT ${VQL.USED_DOCUMENT_FIELDS_AS_STRING},` +
    `(SELECT ${VQL.USED_PRODUCT_FIELDS_AS_STRING} FROM ${VQL.DocumentObject.PRODUCT}),` +
    `(SELECT ${VQL.USED_COUNTRY_FIELDS_AS_STRING} FROM ${VQL.DocumentObject.COUNTRY}) ` +
    `FROM ${VQL.VaultObject.DOCUMENTS} ` +
    `WHERE ${VQL.DocumentField.ID} CONTAINS (${relatedDocumentIdsAsString})`,
  );
}

export async function getDocumentCountryAndProductInfo(id: number) {
  return getDataByQuery(
    `SELECT ${VQL.DocumentField.ID}, ` +
    `(SELECT ${VQL.USED_PRODUCT_FIELDS_AS_STRING} FROM ${VQL.DocumentObject.PRODUCT}),` +
    `(SELECT ${VQL.USED_COUNTRY_FIELDS_AS_STRING} FROM ${VQL.DocumentObject.COUNTRY}) ` +
    `FROM ${VQL.VaultObject.DOCUMENTS} WHERE ${VQL.DocumentField.ID} = '${id}'`,
  );
}

async function getDataByQuery(query: string) {
  return request({
    url: `query?q=${query}`,
  });
}
