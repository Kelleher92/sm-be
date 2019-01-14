import * as rp from 'request-promise';
import { basePmRequestParam } from './constants/getBaseRequestParam';
import { isSuccessfulResponse } from './utils/index';

export const userLogin = (req, res) => {
  const loginRequestData = {
    username: req.body.username,
    password: req.body.password,
  };

  // to-do sanitise and validate before sending request : express-validator

  const loginRequestParams = basePmRequestParam;
  loginRequestParams.method = 'POST';
  loginRequestParams.url = '/auth';
  loginRequestParams.form = loginRequestData;

  rp(loginRequestParams)
  .then((response) => {
    const data = response.body;
    const isAuthenticated = isSuccessfulResponse(response);
    res.send({
      isAuthenticated,
      data,
    });
  })
  .catch((err) => {
    res.send({
      isAuthenticated: false,
      err,
    });
  });
};
