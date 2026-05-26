import mongoose from "mongoose";

const dbConnectionFinal = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB);
    console.log(
      `Connected to the Database ${conn.connection.host}  ${conn.connection.port}`,
    );
  } catch (err) {
    console.log(`error ${err}`);
    process.exit(1);
  }
};

// const dbConnection = mongoose
//   .connect("mongodb://localhost:27017/express_project")
//   .then(() => console.log("Connected to the Database"))
//   .catch((err) => console.log(`error ${err}`));

export default dbConnectionFinal;
