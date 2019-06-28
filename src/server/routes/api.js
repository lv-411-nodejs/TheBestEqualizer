import ApiController from '../controllers/ApiController';

export default (app) => {
  app.get('/api', ApiController.index);
  app.post('/registration', ApiController.postAddUser);
  app.post('/login', ApiController.postLogUser);
};
