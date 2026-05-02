import { request, Router } from "express";
import { userList } from "../utils/userList.js";


const  userRoute  =  Router();

userRoute.get("/api/users", (request, response) => {
  return response.send(userList);
});

//URL PARAMETRS
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

userRoute.delete("/api/users/:id",(request, response)=>{
  // const {params:{id}} = request;
   const userId = parseInt(request.params.id);

   const findUserIndex = userList.findIndex((user)=>user.id ===userId)
    if(findUserIndex=== -1)
      return response.sendStatus(400)
   userList.splice(findUserIndex,1)

   return  response.status(200).send(userList)

})

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

userRoute.post("/api/users", (request, response) => {
  console.log(request.body);
  const { body } = request;
  const newUser = { id: userList[userList.length - 1].id + 1, ...body };
  userList.push(newUser);
  return response.status(201).send(newUser);
});


export default userRoute