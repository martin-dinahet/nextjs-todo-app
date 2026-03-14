"use server";

import { revalidatePath } from "next/cache";
import { toggleTodo } from "@/business/todo";

export const toggleTodoMutation = async (id: string) => {
  await toggleTodo(id);
  revalidatePath("/dashboard");
};
