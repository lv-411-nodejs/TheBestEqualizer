import ApiController from '../controllers/ApiController';

export default (app) => {
  app.get('/api', ApiController.index);
  app.post('/registration', ApiController.postRegistrationHandler);
  app.post('/login', ApiController.postLoginHandler);
  app.post('/token/refresh', ApiController.refreshTokenHandler);
};
