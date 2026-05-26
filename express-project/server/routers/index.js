import express, { Router } from "express";
import userRouter from "./user";

const routes = Router();
routes.use(userRouter);

export default routes;
