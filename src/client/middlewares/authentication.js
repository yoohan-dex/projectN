export const authentication = {
  applyMiddleware(req, next) {
    if (localStorage.getItem('token') && !req.options.headers) {
      req.options.headers = {};
      req.options.headers.authorization = localStorage.getItem('token');
    }
    next();
  },
};

