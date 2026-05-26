import express from "express";
import dotenv from "dotenv";
import dbConnectionFinal from "./utils/db.js";
import expressEjsLayouts from "express-ejs-layouts";
import { homepage } from "./server/controller/userController.js";
import routes from "./server/routers/index.js";

dotenv.config({ path: "local.env" });
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dbConnectionFinal();
// Static file
app.use(express.static("public"));

// Templating File
app.use(expressEjsLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

const PORT = process.env.PORT || 9000;

app.use(routes);

app.listen(PORT, () => {
  console.log(`The Server run at PORT  ${PORT}`);
});
