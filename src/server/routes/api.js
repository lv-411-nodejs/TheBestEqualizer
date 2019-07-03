import ApiController from '../controllers/ApiController';

export default (app) => {
  app.post('/registration', ApiController.postRegistrationHandler);
  app.post('/login', ApiController.postLoginHandler);
  app.post('/token/refresh', ApiController.refreshTokenHandler);
};
