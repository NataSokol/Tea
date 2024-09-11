const apiRouter = require("express").Router();

// const teaRouter = require('./tea.routes');
const authRouter = require("./auth.routes");
const tokensRouter = require("./token.routes");
const errorRouter = require("./error.routes");

// маршруты
// apiRouter.use('/tea', teaRouter);
apiRouter.use("/auth", authRouter);
apiRouter.use("/tokens", tokensRouter);

// 404
apiRouter.use("*", errorRouter);

module.exports = apiRouter;
