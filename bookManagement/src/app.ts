import express, { Application } from "express";
const app: Application = express();
import usersRouter from "./routes/user.routes";
import booksRouter from "./routes/book.routes";
import loanRouter from "./routes/loan.routes";
import * as dotenv from "dotenv";
import { connectDB } from "./config/db";
dotenv.config();
let PORT = process.env.PORT || 3003;
connectDB();
app.use(express.json());

app.use("/users", usersRouter);
app.use("/books", booksRouter);
app.use("/loan", loanRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
