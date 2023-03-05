import { Router } from "express";

import {
  postBook,
  getAllbooks,
  updateBook,
  deletebook,
} from "../controller/book.controll";
const router = Router();

router.post("/", postBook);
router.get("/", getAllbooks);
router.put("/:id", updateBook);
router.delete("/:id", deletebook);



export default router;
