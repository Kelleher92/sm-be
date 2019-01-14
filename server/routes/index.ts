import * as express from 'express';
const router = express.Router({ mergeParams: true });

import baseRoutes from './base';
import documentationRoutes from './documentation';
import documentRoutes from './document';
import projectRoutes from './project';
import userRoutes from './user';
import pdfRoutes from './pdf';

// init api routes only after database has been created
router.use('/', baseRoutes);
router.use('/documents', documentRoutes);
router.use('/documentation', documentationRoutes);
router.use('/projects', projectRoutes);
router.use('/users', userRoutes);

// TODO: temporary solution. move pdf generation to another path
router.use('/', pdfRoutes);

// catchall
router.get('*', (req, res) => {
  return res.status(404).json({
    message: '404: Page not found',
  });
});

export default router;
