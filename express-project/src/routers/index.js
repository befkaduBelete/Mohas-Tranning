import { Router } from "express";

import userRoute from "./userRouter.js"
import productRoute from "./productRouter.js"

const routerList = Router();

routerList.use(userRoute);
routerList.use(productRoute);


export default routerList