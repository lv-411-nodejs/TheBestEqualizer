// import ApiController from '../controllers/ApiController';
// import { loginUser, registerUser, refreshToken, redis, getFromRedis, client } from '../controllers/authentication';
import * as auth from '../controllers/authentication';
import { getEffect } from '../controllers/effects';
import { middleware } from '../helpers/token';

export default (app) => {

  app.post('/login', auth.loginUser);
  app.post('/registration', auth.registerUser);
  app.post('/token/refresh', auth.refreshToken);

  app.get('/effect', middleware, getEffect);

  app.post('/set-redis', auth.redis);
  app.post('/get-redis', auth.getDataRedis);
  app.post('/get-redis-info', auth.client);

};
