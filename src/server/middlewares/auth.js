import * as Token from '../helpers/token';
import * as Redis from '../helpers/redis';
import response from '../helpers/errorHandler';
import { ClientError, ForbiddenError } from '../helpers/error';

const setEnvironmentToRequest = (req, { _refresh, userId, token }) => {
  req.refresToken = _refresh;
  req.userId = userId;
  req.token = token;
  return req;
};

const refresTokens = async ({ userId, _refresh: refresh }) => {
  try {
    if (!refresh) {
      throw new ClientError('Refresh not provided');
    }

    const storedUserId = await Redis.getToken(refresh.toString());

    if (storedUserId !== userId) {
      throw new ForbiddenError('Refresh not valid, access denided');
    }

    const newTokens = await Token.generateTokensPair({ userId });

    if (newTokens) {
      await Redis.deleteToken(refresh.toString());
      await Redis.putToken(newTokens.refresh, userId);
    }

    return newTokens;
  } catch (error) {
    throw error;
  }
};

const authMiddleware = async (req, res, next) => {
  const token = req.headers['x-access-token'];

  try {
    if (!token) {
      throw new ForbiddenError('No Token provided');
    }

    setEnvironmentToRequest(req, {
      ...Token.verify(token),
      token,
    });

    return next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      try {
        const decodeTokens = Token.decode(token);
        const newTokens = await refresTokens(decodeTokens);

        const requestEnvirment = {
          _refresh: newTokens.refresh,
          userId: decodeTokens.userId,
          token: newTokens.access,
        };

        setEnvironmentToRequest(req, requestEnvirment);

        return next();
      } catch (err) {
        return response(res, err.message, err.code);
      }
    }

    return response(res, error.message, error.code);
  }
};

export default authMiddleware;
