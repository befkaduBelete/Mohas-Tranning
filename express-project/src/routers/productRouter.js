import { Router } from "express";
import { productList } from "../utils/productList.js";
import {loginMiddleware,sessionMiddleware} from "../utils/middlewares.js";

const productRoute = Router();
productRoute.get("/api/products/:id",loginMiddleware,sessionMiddleware, (request, response) => {
  const productId = parseInt(request.params.id);
  if (isNaN(productId))
    return response.status(400).send({ message: "Bad reques" });
  const product = productList.find((user) => user.id === productId);
  if (!product) {
    return response.status(404).send({ message: "Product not found " });
  }
  return response.send(product);
});




productRoute.get("/api/products", (req,res,next)=>{
  console.log("M2")
  next()
}, (request, response) => {
  return response.status(200).send(productList);
});



export default productRoute;