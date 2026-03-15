"use server";

import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { getSession } from "@/lib/helpers/get-session";
import { CreateTodoForm } from "@/widgets/create-todo-form";
import { LogoutButton } from "@/widgets/logout-button";
import { TodoItem } from "@/widgets/todo-item";

export default async function DashboardPage() {
  const session = await getSession();
  if (!session) redirect("/auth/login");
  const todos = await db.todo.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
  });

  const done = todos.filter((t) => t.done).length;
  const progress = todos.length > 0 ? Math.round((done / todos.length) * 100) : 0;
  const allDone = todos.length > 0 && done === todos.length;

  return (
    <div className="min-h-screen bg-muted/40">
      <div className="mx-auto flex max-w-xl flex-col gap-6 px-4 py-12">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="font-bold text-2xl">
              {allDone ? "All done 🎉" : `Hello, ${session.user.name}!`}
            </h1>
            <p className="mt-1 text-muted-foreground text-sm">
              {todos.length === 0
                ? "Nothing here yet — add your first task"
                : `${done} of ${todos.length} tasks completed`}
            </p>
          </div>
          <LogoutButton />
        </div>

        {/* Progress bar */}
        {todos.length > 0 && (
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        {/* Todo list */}
        <ul className="flex flex-col gap-2">
          {todos.length === 0 ? (
            <li className="rounded-lg border border-dashed py-12 text-center text-muted-foreground text-sm">
              No tasks yet
            </li>
          ) : (
            todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
          )}
        </ul>

        {/* Add todo */}
        <div className="rounded-lg border bg-card p-4">
          <CreateTodoForm />
        </div>
      </div>
    </div>
  );
}
