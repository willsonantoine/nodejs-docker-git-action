import express from "express";
import usersController from "./users.controller";

const UserRouter = express.Router();

UserRouter.post("/create", usersController.create_account);
UserRouter.get("/type", usersController.load_type);

export default UserRouter;
