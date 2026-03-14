"use server";

import { revalidatePath } from "next/cache";
import { deleteTodo } from "@/business/todo";

export const deleteTodoMutation = async (id: string) => {
  await deleteTodo(id);
  revalidatePath("/dashboard");
};
