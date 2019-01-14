// TODO: maybe need to split on separate files

// Vault Objects
export enum VaultObject {
  DOCUMENTS = 'documents',
  RELATIONSHIPS = 'relationships',
  RENDITIONS = 'renditions',
}

export enum DocumentObject {
  COUNTRY = 'document_country__vr',
  PRODUCT = 'document_product__vr',
  RENDITIONS = 'renditions__sysr',
}

// Product
export enum ProductField {
  ID = 'id',
  NAME = 'name__v',
}

const USED_PRODUCT_FIELDS = Object.values(ProductField) as string[];
export const USED_PRODUCT_FIELDS_AS_STRING = USED_PRODUCT_FIELDS.join(',');

// Country
export enum CountryField {
  ID = 'id',
  NAME = 'name__v',
}

const USED_COUNTRY_FIELDS = Object.values(CountryField) as string[];
export const USED_COUNTRY_FIELDS_AS_STRING = USED_COUNTRY_FIELDS.join(',');

// Document
export enum DocumentField {
  ID = 'id',
  TYPE = 'type__v',
  SUBTYPE = 'subtype__v',
  CLASSIFICATION = 'classification__v',
  FILE_NAME = 'filename__v',
  NAME = 'name__v',
  MAJOR_VERSION_NUMBER = 'major_version_number__v',
  MINOR_VERSION_NUMBER = 'minor_version_number__v',
  DOCUMENT_CREATION_DATE = 'document_creation_date__v',
  DOCUMENT_NUMBER = 'document_number__v',
  LANGUAGE = 'language__v',
  LOCKED = 'locked__v',
  VERSION = 'version_id',
  AUDIENCE = 'audience__c',
  MD5_CHECKSUM = 'md5checksum__v',
}

export const USED_DOCUMENT_FIELDS = Object.values(DocumentField) as string[];
export const USED_DOCUMENT_FIELDS_AS_STRING = USED_DOCUMENT_FIELDS.join(',');

// Rendition
export enum RenditionType {
  FPO = 'lo__c',
  HIGH = 'high__c',
  VIEWABLE_RENDITION = 'viewable_rendition__v',
}

export const RENDITION_TYPES = Object.values(RenditionType) as RenditionType[];

export enum RenditionField {
  RENDITION_TYPE = 'rendition_type__sys',
  DOCUMENT_ID = 'document_id',
  MAJOR_VERSION_NUMBER = 'major_version_number__sys',
  MINOR_VERSION_NUMBER = 'minor_version_number__sys',
  SIZE = 'size__sys',
  MD5_CHECKSUM = 'md5checksum__sys',
  FILE_NAME = 'filename__sys',
  PENDING = 'pending__sys',
  FORMAT = 'format__sys',
  UPLOAD_DATE = 'upload_date__sys',
  DOCUMENT_VERSION_ID = 'document_version_id',
}

const USED_RENDITION_FIELDS = Object.values(RenditionField) as string[];
export const USED_RENDITION_FIELDS_AS_STRING = USED_RENDITION_FIELDS.join(',');

// Relationship
export enum RelationshipType {
  COMPONENTS = 'components__c',
  RELATED_DOCUMENTS = 'related_documents__c',
  ASSEMBLER = 'assembler__c',
  BASED_ON = 'basedon__v',
  ORIGINAL_SOURCE = 'original_source__v',
}

export enum RelationshipField {
  CREATED_BY = 'created_by__v',
  CREATED_DATE = 'created_date__v',
  ID = 'id',
  RELATIONSHIP_TYPE = 'relationship_type__v',
  SOURCE_DOC_ID = 'source_doc_id__v',
  TARGET_DOC_ID = 'target_doc_id__v',
}

export const USED_RELATIONSHIP_FIELDS = Object.values(RelationshipField) as string[];
export const USED_RELATIONSHIP_FIELDS_AS_STRING = USED_RELATIONSHIP_FIELDS.join(',');
