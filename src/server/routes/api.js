// import ApiController from '../controllers/ApiController';
import { loginUser, registerUser, refreshToken } from '../controllers/authentication';
import { getEffect } from '../controllers/effects';

export default (app) => {
  // app.post('/registration', ApiController.postRegistrationHandler);
  // app.post('/login', ApiController.postLoginHandler);
  // app.post('/effects', ApiController.postEffectsHandler);
  // app.get('/effects', ApiController.getEffectsHandler);
  // app.post('/token/refresh', ApiController.refreshTokenHandler);

  app.post('/login', loginUser);
  app.post('/registration', registerUser);
  app.post('/token/refresh', refreshToken);

  app.get('/effect', getEffect);

  
};
