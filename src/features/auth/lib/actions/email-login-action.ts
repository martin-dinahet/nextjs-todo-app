"use server";

import { redirect } from "next/navigation";
import { emailLogin } from "@/business/auth";
import { handle } from "@/lib/helpers/handle";
import { parseFormData } from "@/lib/helpers/parse-form-data";
import type { Action } from "@/lib/types/action";
import { EmailLoginSchema } from "../schemas";

export const emailLoginAction: Action = async (_prevState, formData) => {
  const { data, fieldErrors } = parseFormData(EmailLoginSchema, formData);
  if (!data) return { status: "error", fieldErrors, message: "Invalid form data" };
  const result = await handle(emailLogin(data.email, data.password));
  if (result.error) return { status: "error", message: "Failed to sign in" };
  redirect("/dashboard");
};
