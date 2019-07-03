import ApiController from '../controllers/ApiController';
import { middleware } from "../helpers/token";

export default (app) => {
  app.post('/registration', ApiController.postRegistrationHandler);
  app.post('/login', ApiController.postLoginHandler);
  app.post('/token/refresh', ApiController.refreshTokenHandler);
};
