import ApiController from '../controllers/ApiController';
import authMiddleware from '../middlewares/auth';

export default (app) => {
  app.post('/registration', ApiController.postRegistrationHandler);
  app.post('/login', ApiController.postLoginHandler);
  app.post('/effects', authMiddleware, ApiController.postEffectsHandler);
  app.get('/effects', authMiddleware, ApiController.getEffectsHandler);
  app.get('/titles', authMiddleware, ApiController.getUserTitles);
  app.delete('/effects', authMiddleware, ApiController.deleteEffectsHandler);
  app.post('/token/refresh', authMiddleware, ApiController.refreshTokenHandler);
};
