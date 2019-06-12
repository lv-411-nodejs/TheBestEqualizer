import ApiController from '../controllers/ApiController';

export default (app) => {
  app.get('/api', ApiController.index);
};
