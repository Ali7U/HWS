import express, { Application } from "express";
const app: Application = express();
import movieRouter from "./routes/movie.routes"
import * as dotenv from "dotenv";
import { connectDB } from "./config/db";
dotenv.config();
let PORT = process.env.PORT || 3003;

app.use(express.json());
connectDB();

// app.use("/users", userRoutes);
app.use("/movie", movieRouter);

app.listen(PORT, () => console.log(`Server listining on ${PORT}`));
