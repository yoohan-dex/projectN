import logger from 'debug';
import {checkAuthorized} from '../graphql/controllers/authorization';

export default (req, res, next) => {
  console.log(req);
  console.log('---------------------------');
  console.log(req.headers);
  console.log('---------------------------');
  console.log(req.headers.authorization);
  console.log('---------------------------');
  checkAuthorized(req.headers.authorization).then(auth => {
    if (auth) {
      logger('server:authorized')(auth._id);
      req.user = auth.email;
    } else {
      req.user = null;
    }
    next();
  }).catch(error => {
    logger('server:error')(error);
    if (req.headers['user-agent'].includes('node-fetch')) {
      req.user = null;
      next();
    } else {
      return res.status(401).send(error);
    }
  });
};
