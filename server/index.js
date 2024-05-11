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

const app = express();
const port = 3000;

var corsOptions = {
  origin: "https://crescentaria-api.vercel.app",
  optionsSuccessStatus: 200,
  methods: ["GET", "POST"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

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
