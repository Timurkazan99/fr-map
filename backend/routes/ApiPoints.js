const Router = require('express');
const pointsController = require('../controllers/pointsController');

const apiRouter = new Router();

apiRouter.get('/points', pointsController.getAll);

module.exports = apiRouter;