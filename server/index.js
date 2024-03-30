import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import userRouter from "./routes/user.route.js";

const app = express();
const port = 3000;

app.use(express.json());

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB!");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/server/user", userRouter);
