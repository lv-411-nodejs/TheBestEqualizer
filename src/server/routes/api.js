​import ApiController from '../controllers/ApiController';
import { middleware } from '../helpers/token';

export default (app) => {
app.post('/registration', ApiController.postRegistrationHandler);
app.post('/login', ApiController.postLoginHandler);
app.post('/effects', middleware, ApiController.postEffectsHandler);
app.get('/effects', middleware, ApiController.getEffectsHandler);
app.post('/token/refresh', ApiController.refreshTokenHandler);
};