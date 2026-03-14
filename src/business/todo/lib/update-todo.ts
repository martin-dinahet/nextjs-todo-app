import { getTodo } from "@/business/todo";
import { db } from "@/lib/db";
import { handle } from "@/lib/helpers/handle";

export async function updateTodo(id: string, data: { title: string; done: boolean }) {
  const todo = await getTodo(id);
  if (!todo) throw new Error("Todo not found");
  const result = await handle(
    db.todo.update({
      where: {
        id: todo.id,
      },
      data,
    })
  );
  if (result.error) throw new Error(result.error);
  return result;
}
