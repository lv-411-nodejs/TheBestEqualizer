import ApiController from '../controllers/ApiController';

export default (app) => {
  app.post('/registration', ApiController.postRegistrationHandler);
  app.post('/login', ApiController.postLoginHandler);
  app.post('/effects', ApiController.postEffectsHandler);
  app.get('/effects', ApiController.getEffectsHandler);
  app.post('/token/refresh', ApiController.refreshTokenHandler);
};
