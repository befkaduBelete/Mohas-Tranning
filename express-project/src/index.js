import express from "express";
import routerList from "./routers/index.js";
import { loginMiddleware } from "./utils/middlewares.js";



const app = express();



app.use(express.json());
const PORT = process.env.PORT || 9000;

app.get("/",(req,res)=>{
 res.cookie("QIYAS","AASTU CAMPASS",{maxAge:60000})
 res.send({message:"COOKIS"})
});

app.use(loginMiddleware)
app.use(routerList)

app.listen(PORT, () => {
  console.log(`The server run at PODT ${PORT}`);
});
