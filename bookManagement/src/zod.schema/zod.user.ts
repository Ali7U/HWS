import { z, TypeOf } from "zod";

export const Registertype = z.object({
  body: z.object({
    username: z
      .string({
        required_error: "username is required",
        invalid_type_error: "please write letters",
      })
      .max(6, "username must be less than 6")
      .min(2, "username must be more than two"),
    password: z
      .string({
        required_error: "password is required",
        invalid_type_error: "please write pass word",
      })
      .max(6, "password must be less than 6")
      .min(2, "password must be more than two"),
  }),
});

export const Logintype = z.object({
  body: z.object({
    username: z
      .string({
        required_error: "username is required",
        invalid_type_error: "please write letters",
      })
      .max(6, "username must be less than 6")
      .min(2, "username must be more than two"),
    password: z.string({
      required_error: "password is required",
      invalid_type_error: "please write pass word",
    }),
  }),
});

export type Registertypeschema = TypeOf<typeof Registertype>["body"];
export type Logintypeschema = TypeOf<typeof Logintype>["body"];
