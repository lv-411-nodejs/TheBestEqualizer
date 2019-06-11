const ApiController = require('../controllers/ApiController');

module.exports = (app) => {
  app.get('/', ApiController.index);
};
