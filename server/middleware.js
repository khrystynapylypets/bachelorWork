import { decodeJWTToken } from './services/tokenService';
import envConfig from './configs/env.config'

export const withAuth = (req, res, next) => {
  try {
    let token = req.get('access-token')

    if (!token) {
      res.status(401).send({message: 'Unauthorized: No token provided'});
    }
    else {
      let decoded = decodeJWTToken(token, envConfig.JWT_KEY)
      req.email = decoded.email;
      next();
    }
  }
  catch(error) {
    res.status(401).send({message: 'Unauthorized: Invalid token'});
  }
}