
import { request } from '../../services/PromoMats/api';

export function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  return res.status(401).json({
    message: 'Authentication Failed',
  });
}

export function initRequest(req, res, next) {
  const { authorization: sessionId } = req.headers;

  if (sessionId) {
    request.init(sessionId);

    return next();
  }

  return res.status(401).json({
    message: 'SessionID doesn\'t exists',
  });
}
