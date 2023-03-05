import express from "express";
import {
  findUsers,
  Register,
  updateUser,
  deleteUser,
  Login,
  endpointWithID,
  endpointWithEmail,
  endpointWithAge,
  newPassword,
} from "../controller/user.controller";
import validate from "../middleware/validate";
import { Logintype, Registertype } from "../zod.schema/zod.user";

let route = express.Router();

route.get("/", findUsers);

route.post("/", validate(Registertype), Register);
route.post("/login", validate(Logintype), Login);

route.post("/endpointID", endpointWithID)
route.post("/endpointEmail", endpointWithEmail);
route.post("/endpointEmail", endpointWithAge);

route.put("/updatePassword", newPassword);


route.put("/:id", updateUser);

route.delete("/:id", deleteUser);

export default route;
