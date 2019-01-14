import * as express from 'express';
import * as DocumentService from './../services/PromoMats/documents';

const router = express.Router({ mergeParams: true });

router.get('/', DocumentService.getAllDocuments);

export default router;
