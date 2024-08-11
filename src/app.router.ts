import express from "express";
import V1Router from "./v1/v1.router";

const AppRouter = express.Router();

AppRouter.use("/v1", V1Router);

export default AppRouter;
