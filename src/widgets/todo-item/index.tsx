"use client";

import { Trash } from "lucide-react";
import { useTransition } from "react";
import { toast } from "sonner";
import { deleteTodoMutation, toggleTodoMutation } from "@/features/todo";
import type { Todo } from "@/generated/client";
import { handle } from "@/lib/helpers/handle";

interface Props {
  todo: Todo;
}

export function TodoItem({ todo }: Props) {
  const [pending, startTransition] = useTransition();

  function handleCheck() {
    startTransition(async () => {
      const result = await handle(toggleTodoMutation(todo.id));
      if (result.error) {
        toast.error("Failed to update todo status.");
        return;
      }
      toast.success("Todo status updated successfully.");
    });
  }

  function handleDelete() {
    startTransition(async () => {
      const result = await handle(deleteTodoMutation(todo.id));
      if (result.error) {
        toast.error("Failed to delete todo.");
        return;
      }
      toast.success("Todo deleted successfully.");
    });
  }

  return (
    <li className="flex items-center justify-between gap-4 rounded-box bg-base-200 px-4 py-3 transition-colors hover:bg-base-300">
      <span className={`flex-1 text-sm ${todo.done ? "line-through opacity-40" : ""}`}>
        {todo.title}
      </span>
      {pending && <span className="loading loading-spinner" />}
      <input
        className="checkbox"
        defaultChecked={todo.done}
        onChange={handleCheck}
        type="checkbox"
      />
      <button className="btn-ghost btn-sm" disabled={pending} onClick={handleDelete} type="button">
        <Trash className="h-4 w-4" />
      </button>
    </li>
  );
}
