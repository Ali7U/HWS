import { Router } from "express";
import { deleteMovie, postMovie, showMovies, updateMovie } from "../controllers/movie.controller";
import validate from "../middleware/validate";
import { PostMovieType } from "../zod.schema/zod.user";

const router = Router();

router.get("/", showMovies);
router.post("/", validate(PostMovieType), postMovie);
router.put("/:id", updateMovie);
router.delete("/:id", deleteMovie);

export default router;
