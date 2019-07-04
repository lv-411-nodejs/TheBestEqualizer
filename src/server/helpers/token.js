import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { response } from '../helpers/errorHandler';

const { SECRET = '669141b534e06cf5c0271a389b79ebc11910f86bd210a74b6f00fcb974010809' } = process.env;
const tokenLife = '15m';

export const generate = (payload, life = tokenLife) => {
  const refresh = crypto.randomBytes(24).toString('hex');
  const access = jwt.sign({
    ...payload,
    _refresh: refresh
  }, SECRET, { expiresIn: life });

  return { refresh, access };
};

export const middleware = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) {
    return response(res, {
      success: false,
      message: 'No token provided.'
    }, 403);
  }

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      return response(res, {
        success: false,
        message: 'Failed to authenticate token.'
      }, 403);
    }

    req.userId = decoded.userId;
    next();
  });
};
