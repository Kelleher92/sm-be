import * as express from 'express';
const router = express.Router({ mergeParams: true });

/**
 * @api {get} /api/status Check api status
 * @apiName Status
 * @apiGroup General
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.get('/status', (req, res) => {
  return res.status(200).json({
    status: 'status ok',
  });
});

export default router;
