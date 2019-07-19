import ApiController from '../controllers/ApiController';
import { login, register } from '../controllers/authentication';

export default (app) => {
  // app.post('/registration', ApiController.postRegistrationHandler);
  // app.post('/login', ApiController.postLoginHandler);
  // app.post('/effects', ApiController.postEffectsHandler);
  // app.get('/effects', ApiController.getEffectsHandler);
  // app.post('/token/refresh', ApiController.refreshTokenHandler);

  app.post('/login', login);
  app.post('/registration', register);
  
};
