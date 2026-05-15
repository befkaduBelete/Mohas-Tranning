import express from "express";
import routerList from "./routers/index.js";
import { loginMiddleware } from "./utils/middlewares.js";
import cookieParser from "cookie-parser";
import session from "express-session";
import { userList } from "./utils/userList.js";
import passport from "passport";
import "./auth/local-auth.js";
import mongoose from "mongoose";
import dbConnection from "./utils/db.js";

const app = express();
app.use(express.json());
// mongoose
//   .connect("mongodb://localhost:27017/express_project")
//   .then(() => console.log("Connected to the Database"))
//   .catch((err) => console.log(`error ${err}`));
dbConnection();

app.use(cookieParser("QIYASS"));
app.use(
  session({
    secret: "MY-COOKIY",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 60000 * 60 * 24,
    },
  }),
);
app.post(
  "/api/passport-auth",
  passport.authenticate("local"),
  (requet, response) => {
    response.send({ mesaage: "Testing Passport " });
  },
);
const PORT = process.env.PORT || 9000;

app.get("/", (request, response) => {
  response.cookie("QIYASS", "EXPRESS TRANNING", {
    maxAge: 60000 * 60 * 24,
    signed: true,
  });
  console.log(request.headers.cookie);
  console.log(request.cookies);
  console.log(request.signedCookies);
  //  res.cookie("QIYAS","AASTU CAMPASS",{maxAge:60000})
  response.send({ message: "COOKIS IS SET" });
  // {MY-COOKIY":  "VALUE"}
});

app.get("/seession", (request, response) => {
  console.log(request.session);
  console.log(request.sessionID);
  console.log(request.session.id);
  request.session.visited = true;
  response.send({ message: "Session is created !!" });
});

app.post("/api/auth/login", (request, response) => {
  const {
    body: { username, password },
  } = request;

  const userFind = userList.find((user) => user.username === username);
  if (!userFind || userFind.password !== password)
    return response.status(401).send({ message: "not Autenticated " });
  request.session.user = userFind;
  return response.status(200).send(userFind);
});

app.get("/api/auth/session", (request, response) => {
  request.sessionStore.get(request.sessionID, (err, seession) => {
    console.log(seession);
  });
  return request.session.user
    ? response.status(200).send(request.session.user)
    : response.status(401).send("Not fund ");
});

app.use(loginMiddleware);
app.use(routerList);

app.listen(PORT, () => {
  console.log(`The server run at PODT ${PORT}`);
});
