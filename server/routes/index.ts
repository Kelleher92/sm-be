import * as express from 'express';
import baseRoutes from './base';
import userRoutes from './user';
import skillRoutes from './skill';

const router = express.Router({ mergeParams: true });

// init api routes only after database has been created
router.use('/', baseRoutes);
router.use('/users', userRoutes);
router.use('/skills', skillRoutes);

// catchall
router.get('*', (req, res) => {
  return res.status(404).json({
    message: '404: Page not found',
  });
});

export default router;
