export const CatchAsyncError =
  (asyncFunc) =>
  (request, response, next) => {
    Promise.resolve(asyncFunc(request, response, next)).catch(next);
  };