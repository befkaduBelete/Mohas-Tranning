import passport from "passport";
import { Strategy } from "passport-local";
import { userList } from "../utils/userList.js";

//Step 2 meke serialize
passport.serializeUser((user, done) => {
  console.log("Serialization is call !!");
  console.log(user);
  done(null, user);
});
//sep 3
passport.deserializeUser((id, done) => {
  console.log("Desiralization is colled ");
  try {
    const userFind = userList.find((user) => user.id === id);
  } catch (err) {}
});

// step One
export default passport.use(
  new Strategy((username, password, done) => {
    console.log(` Usename = ${username}  Password= ${password}`);
    try {
      const userFind = userList.find((user) => user.username === username);

      if (!userFind) throw new Error("User not Found ");
      if (userFind.password !== password) throw new Error("Invalid password");
      done(null, userFind);
    } catch (error) {
      done(null, null);
    }
  }),
);
