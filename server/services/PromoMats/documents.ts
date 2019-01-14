import * as rp from 'request-promise';
import { basePmRequestParam } from './constants/getBaseRequestParam';
import { isSuccessfulResponse } from './utils/index';

export const getAllDocuments = (req, res) => {
  const requestParams = basePmRequestParam;
  const sessionId = req.headers.authorization || '000000';

  requestParams.url = '/objects/documents?named_filter=Favorites';
  requestParams.method = 'GET';
  requestParams.headers.Authorization = sessionId;

  rp(requestParams).then((response) => {
    const data = response.body;
    const isSuccessful = isSuccessfulResponse(response);

    res.send({
      isSuccessful,
      data,
    });
  })
    .catch((err) => {
      res.send({
        err,
      });
    });
};
