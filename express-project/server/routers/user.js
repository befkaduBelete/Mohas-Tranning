import express, { Router } from "express";
import { about, homepage } from "../controller/userController";

const userRouter = Router();

userRouter.get("/", homepage);
userRouter.get("/about", about);
export default userRouter;
