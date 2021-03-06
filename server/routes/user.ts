import * as express from 'express';
import * as UserService from './../services/UserService';

const router = express.Router({ mergeParams: true });
router.post('/login', UserService.userLogin);
router.post('/create', UserService.createUser);
router.post('/list', UserService.listUsers);

export default router;
