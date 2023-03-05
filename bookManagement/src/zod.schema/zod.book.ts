import { z, TypeOf } from "zod";

export const Booktypes = z.object({
  body: z.object({
    bookName: z
      .string({
        required_error: "book name is required",
        invalid_type_error: "please write letters",
      })
      .min(3, "book name must be more than two letters"),
    genre: z.string({
      required_error: "genre is required",
      invalid_type_error: "please write letters",
    }),
  }),
});



export type Booktypesschema = TypeOf<typeof Booktypes>["body"];
