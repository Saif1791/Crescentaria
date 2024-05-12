import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import userRouter from "./routes/user.route.js";
import signupRouter from "./routes/signup.route.js";
import adminsignupRouter from "./routes/adminsignup.route.js";
import signinRouter from "./routes/signin.route.js";
import adminsigninRouter from "./routes/adminsignin.route.js";
import signoutRouter from "./routes/signout.route.js";
import getFoodRouter from "./routes/getFood.route.js";
import orderRouter from "./routes/orderplaced.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

const app = express();
const port = 3000;

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(cookieParser());

const __dirname = path.resolve();

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
app.use("/server", signupRouter);
app.use("/server", signinRouter);
app.use("/server", adminsignupRouter);
app.use("/server", adminsigninRouter);
app.use("/server", signoutRouter);
app.use("/server", getFoodRouter);
app.use("/server/order", orderRouter);

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client", "dist", "index.html"));
});
