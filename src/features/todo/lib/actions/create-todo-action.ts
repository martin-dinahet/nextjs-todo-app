"use server";

import { revalidatePath } from "next/cache";
import { createTodo } from "@/business/todo";
import { handle } from "@/lib/helpers/handle";
import { parseFormData } from "@/lib/helpers/parse-form-data";
import type { Action } from "@/lib/types/action";
import { CreateTodoSchema } from "../schemas";

export const createTodoAction: Action = async (_prevState, formData) => {
  const { data, fieldErrors } = parseFormData(CreateTodoSchema, formData);
  if (!data) return { status: "error", fieldErrors, message: "Invalid form data" };
  const result = await handle(createTodo(data.title));
  if (result.error) return { status: "error", message: "Failed to create todo" };
  revalidatePath("/dashboard");
  return { status: "success" };
};
