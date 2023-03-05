import {Router} from 'express'
import validate from "../middleware/validate";
import { postLoan, endpointWithBooks } from '../controller/loan.controller';
const router = Router()

router.post("/post", postLoan)
router.post("/endpoint", endpointWithBooks)

export default router