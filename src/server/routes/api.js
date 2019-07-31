import ApiController from '../controllers/ApiController';
import authMidleware from '../middlewares/auth';

export default (app) => {
  app.post('/registration', ApiController.postRegistrationHandler);
  app.post('/login', ApiController.postLoginHandler);
  app.post('/effects', authMidleware, ApiController.postEffectsHandler);
  app.get('/effects', authMidleware, ApiController.getEffectsHandler);
  app.get('/titles', authMidleware, ApiController.getUserTitles);
  app.delete('/effects', authMidleware, ApiController.deleteEffectsHandler);
  app.post('/token/refresh', authMidleware, ApiController.refreshTokenHandler);
};
