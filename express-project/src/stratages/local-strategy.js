import passport from "passport";
import { Strategy } from "passport-local";
import { userList } from "../utils/userList.js";
//Step 2 do serialization

passport.serializeUser((user, done) => {
  console.log(`Inside Sirilazation`);
  console.log(user);
  done(null, user.id);
});

//step 3
passport.deserializeUser((id, done) => {
  console.log(`Inside deserilization`);
  console.log(`Deserilaing ID : ${id}`);
  try {
    const userFind = userList.find((user) => user.id === id);
    if (!userFind) throw new Error("User not Found");
    done(null, userFind);
  } catch (err) {
    done(err, null);
  }
});

// Step 1
export default passport.use(
  new Strategy((username, password, done) => {
    console.log(`username= ${username}  password = ${password}`);
    try {
      const userFind = userList.find((user) => user.username === username);
      if (!userFind) throw new Error(" User not found !");
      if (userFind.password !== password)
        throw new Error(" Invalid Credentials");
      done(null, userFind);
    } catch (err) {
      done(null, null);
    }
  }),
);
