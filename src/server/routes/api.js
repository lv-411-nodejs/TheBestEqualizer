// import ApiController from '../controllers/ApiController';
import { loginUser, registerUser, refreshToken, redis } from '../controllers/authentication';
import { getEffect } from '../controllers/effects';
import { middleware } from '../helpers/token';

export default (app) => {

  app.post('/login', loginUser);
  app.post('/registration', registerUser);
  app.post('/token/refresh', refreshToken);

  app.get('/effect', middleware, getEffect);

  app.post('/set-redis',  redis); 
};
