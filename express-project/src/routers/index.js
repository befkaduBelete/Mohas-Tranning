import { Router } from "express";

import userRoute from "./userRouter.js"
import productRoute from "./productRouter.js"
import { sessionMiddleware } from "../utils/middlewares.js";

const routerList = Router();


routerList.use(userRoute);
routerList.use(sessionMiddleware);
routerList.use(productRoute);


export default routerList