import express, { Application } from "express";
const app: Application = express();

import * as dotenv from "dotenv";
import { connectDB } from "./config/db";
dotenv.config();
let PORT = process.env.PORT || 3003;


app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`)
)