import * as express from 'express';

const router = express.Router({ mergeParams: true });

router.use('/', (req, res) => {
  return res.status(200).json({
    message: 'Link to apidoc',
  });
});

router.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Link to apidoc',
  });
});

export default router;
