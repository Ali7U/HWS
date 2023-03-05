import { z, TypeOf } from "zod";

export const PostMovieType = z.object({
  body: z.object({
    movieName: z
      .string({
        required_error: "move's name required!",
        invalid_type_error: "please write a letter",
      })
      .max(20, "Movie must be less than 20")
      .min(2, "Movie must be more than 2"),
    genre: z
      .string({
        required_error: "genre is required!",
        invalid_type_error: "please write a letter",
      })
      .max(20, "Movie must be less than 20")
      .min(2, "Movie must be more than 2"),
    rating: z
      .number({
        required_error: "Rating is required!",
        invalid_type_error: "please write a number",
      })
      .max(5)
      .min(1),
    duration: z
      .number({
        required_error: "duration is required!",
        invalid_type_error: "please write a number",
      })
      .min(60),
  }),
});



export type PostMovieTypeschema = TypeOf<typeof PostMovieType>["body"];
