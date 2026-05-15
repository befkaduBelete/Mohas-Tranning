import { request, Router } from "express";
import { userList } from "../utils/userList.js";

import { loginMiddleware } from "../utils/middlewares.js";
import {
  body,
  checkSchema,
  matchedData,
  validationResult,
} from "express-validator";
import { userValidationSchema } from "../utils/schema/userValidation.js";
import { User } from "../utils/schema/user.js";

const userRoute = Router();

// Set One
// userRoute.get("/api/users", (request, response) => {
//   console.log(request.session);
//   console.log(request.sessionID);
//   request.sessionStore.get(request.session.id, (err, sessionData) => {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//     console.log(sessionData);
//   });
//   return response.send(userList);
// });

//URL PARAMETRS
userRoute.get("/api/users", async (request, response) => {
  try {
    const userList = await User.find();
    const count = await User.countDocuments();
    response.status(200).send({
      count: count,
      data: userList,
    });
  } catch (err) {
    response.status(500).send({
      messgae: "Faild to fatch users",
      error: err.message,
    });
  }
});

userRoute.get("/api/users/:id", (request, response) => {
  const userId = parseInt(request.params.id);
  if (isNaN(userId))
    return response.status(400).send({ message: "Bad reques" });
  const user = userList.find((user) => user.id === userId);
  if (!user) {
    return response.status(404).send({ message: "User not found " });
  }
  return response.send(user);
});

userRoute.delete("/api/users/:id", (request, response) => {
  // const {params:{id}} = request;
  const userId = parseInt(request.params.id);

  const findUserIndex = userList.findIndex((user) => user.id === userId);
  if (findUserIndex === -1) return response.sendStatus(400);
  userList.splice(findUserIndex, 1);

  return response.status(200).send(userList);
});

userRoute.patch("/api/users/:id", (request, response) => {
  const {
    body,
    params: { id },
  } = request;
  const parsedId = parseInt(id);
  if (isNaN(parsedId)) return response.sendStatus(400);
  const findUserIndex = userList.findIndex((user) => user.id === parsedId);
  if (findUserIndex === -1) return response.sendStatus(404);
  userList[findUserIndex] = { ...userList[findUserIndex], ...body };
  return response.status(200).send(userList);
});

userRoute.put("/api/users/:id", (request, response) => {
  const { body } = request;
  const parsedId = parseInt(request.params.id);

  if (isNaN(parsedId)) return response.sendStatus(400);

  const findUserIndex = userList.findIndex((user) => user.id === parsedId);

  if (findUserIndex === -1) return response.sendStatus(404);
  userList[findUserIndex] = { id: parsedId, ...body };
  //return response.status(200).send(userList[findUserIndex]);
  return response.status(200).send(userList);
});

// userRoute.post(
//   "/api/users",
//   checkSchema(userValidationSchema),

//   (request, response) => {
//     const result = validationResult(request);
//     const data = matchedData(request);
//     console.log(result);
//     console.log(request.body);
//     const { body } = request;
//     const newUser = { id: userList[userList.length - 1].id + 1, ...data };
//     userList.push(newUser);
//     return response.status(201).send(newUser);
//   },
// );

userRoute.post(
  "/api/users",
  checkSchema(userValidationSchema),
  async (request, response) => {
    const { body } = request;
    const result = validationResult(request);
    if (!result.isEmpty) response.status(400).send({ error: result.array() });
    const data = matchedData(request);
    const newUser = new User(data);
    try {
      const savedUser = await newUser.save();
      return response.status(201).send(savedUser);
    } catch (err) {
      console.log(err);
    }
  },
);

export default userRoute;
