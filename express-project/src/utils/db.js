import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/express_project");
    console.log("Connected to the Database");
  } catch (err) {
    console.log(`error ${err}`);
    process.exit(1);
  }
};

// const dbConnection = mongoose
//   .connect("mongodb://localhost:27017/express_project")
//   .then(() => console.log("Connected to the Database"))
//   .catch((err) => console.log(`error ${err}`));

export default dbConnection;
