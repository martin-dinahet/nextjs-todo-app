import { db } from "@/lib/db";
import { getSession } from "@/lib/helpers/get-session";
import { handle } from "@/lib/helpers/handle";

export async function getTodos() {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");
  const result = await handle(
    db.todo.findMany({
      where: { userId: session.user.id },
    })
  );
  if (result.error) throw new Error(result.error);
  return result;
}
