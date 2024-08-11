import express from "express";
import UserRouter from "./users/users.router";

const V1Router = express.Router();

V1Router.use("/user", UserRouter);

export default V1Router;
