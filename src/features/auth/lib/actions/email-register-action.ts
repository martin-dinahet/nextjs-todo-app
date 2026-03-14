"use server";

import { redirect } from "next/navigation";
import { emailRegister } from "@/business/auth";
import { handle } from "@/lib/helpers/handle";
import { parseFormData } from "@/lib/helpers/parse-form-data";
import type { Action } from "@/lib/types/action";
import { EmailRegisterSchema } from "../schemas";

export const emailRegisterAction: Action = async (_prevState, formData) => {
  const { data, fieldErrors } = parseFormData(EmailRegisterSchema, formData);
  if (!data) return { status: "error", fieldErrors, message: "Invalid form data" };
  const result = await handle(emailRegister(data.name, data.email, data.password));
  if (result.error) return { status: "error", message: "Failed to register" };
  redirect("/dashboard");
};
