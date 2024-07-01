import express from "express";
import cors from "cors";
const app = express();
import { config } from "dotenv";
import { dbConnect } from "./lib/dbConnect";
import { compilerRoutes } from "./routes/compilerRoutes";
import { userRouter } from "./routes/userRoutes";

app.use(express.json());
app.use(cors());
config();

app.use('/compiler', compilerRoutes)
app.use('/user', userRouter)

dbConnect();
app.listen(4000, () => {
  console.log(`http://localhost:4000`);
});
