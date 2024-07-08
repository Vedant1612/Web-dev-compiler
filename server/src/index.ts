import express from "express";
import cors from "cors";
const app = express();
import { config } from "dotenv";
import { dbConnect } from "./lib/dbConnect";
import { compilerRoutes } from "./routes/compilerRoutes";
import { userRouter } from "./routes/userRoutes";
import cookieParser from "cookie-parser";

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "*" }));
config();

app.use("/compiler", compilerRoutes);
app.use("/user", userRouter);

dbConnect();
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`http://localhost:4000`);
});
