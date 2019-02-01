import * as express from 'express';
import * as SkillService from './../services/SkillService';

const router = express.Router({ mergeParams: true });
router.post('/create', SkillService.createSkill);

export default router;
