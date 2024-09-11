const apiRouter = require('express').Router();

const teaRouter = require('./tea.routes');
const errorRouter = require('./error.routes');

// маршруты
apiRouter.use('/teas', teaRouter);


// 404
apiRouter.use('*', errorRouter);

module.exports = apiRouter;