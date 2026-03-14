import { db } from "@/lib/db";
import { getSession } from "@/lib/helpers/get-session";
import { handle } from "@/lib/helpers/handle";

export async function createTodo(title: string) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");
  const result = await handle(
    db.todo.create({
      data: {
        title,
        userId: session?.user.id,
      },
    })
  );
  if (result.error) throw new Error(result.error);
  return result.data;
}
