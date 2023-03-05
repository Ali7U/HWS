import { z, TypeOf } from "zod";

export const Registertype = z.object({
  body: z.object({
    username: z
      .string({
        required_error: "username is required",
        invalid_type_error: "please write letters",
      })
      .min(3, "username must be more than two"),
    password: z
      .number({
        required_error: "password is required",
        invalid_type_error: "please write pass word",
      })
      .min(3, "password must be more than two"),
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
    password: z.number({
      required_error: "password is required",
      invalid_type_error: "please write number password",
    }),
  }),
});

export type Registertypeschema = TypeOf<typeof Registertype>["body"];
export type Logintypeschema = TypeOf<typeof Logintype>["body"];
