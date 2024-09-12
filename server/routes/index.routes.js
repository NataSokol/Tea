const apiRouter = require("express").Router();

const teaRouter = require("./tea.routes");
const authRouter = require("./auth.routes");
const tokensRouter = require("./token.routes");
const commRouter = require("./comm.routes");
const errorRouter = require("./error.routes");

// маршруты

apiRouter.use("/auth", authRouter);
apiRouter.use("/tokens", tokensRouter);

apiRouter.use("/teas", teaRouter);
apiRouter.use("/comments", commRouter);

// 404
apiRouter.use("*", errorRouter);

module.exports = apiRouter;
