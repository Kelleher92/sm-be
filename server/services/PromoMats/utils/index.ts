export const isSuccessfulResponse = (resp: any) => {
  return resp.body.responseStatus === 'SUCCESS' && resp.statusCode === 200;
};
