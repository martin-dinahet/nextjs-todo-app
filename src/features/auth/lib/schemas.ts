import { z } from "zod";

export const EmailLoginSchema = z.object({
  email: z.email(),
  password: z.string(),
});

export const EmailRegisterSchema = z.object({
  name: z.string(),
  email: z.email(),
  password: z.string(),
});
