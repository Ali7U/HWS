import express from "express";
import {
  Register,
  updateUser,
  deleteUser,
  Login,
} from "../controller/user.controller";
import validate from "../middleware/validate";
import { Logintype, Registertype } from "../zod.schema/zod.user";

let route = express.Router();

// route.get("/", findUsers);

route.post("/user", validate(Registertype),Register);
// route.post("/user", validate(Logintype), Login);

route.put("/:id", updateUser);

route.delete("/:id", deleteUser);

export default route;
