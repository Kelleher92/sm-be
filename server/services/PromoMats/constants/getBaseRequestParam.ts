import { getBaseUrl } from './getBaseUrl';

export const basePmRequestParam: any = {
  baseUrl: getBaseUrl,
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json',
  },
  json: true,
  resolveWithFullResponse: true,
};
