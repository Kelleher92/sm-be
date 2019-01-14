import * as express from 'express';

import { initRequest } from '../common/middleware';
import * as ProjectService from './../services/PromoMats/projects';

const router = express.Router({ mergeParams: true });

router.get('/:id', initRequest, ProjectService.getProjectById);

export default router;
