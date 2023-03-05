import express, { Application } from "express";
const app: Application = express();
import * as dotenv from "dotenv";
import { connectDB } from "./config/db";
import userRouter from './routes/user.routes'

dotenv.config();
let PORT = process.env.PORT || 3003;

app.use(express.json());
connectDB();

app.use("/users", userRouter)

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))