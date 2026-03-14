"use client";

import { Pen } from "lucide-react";
import { createTodoAction } from "@/features/todo";
import { Form } from "@/shared/form";

export function CreateTodoForm() {
  return (
    <Form action={createTodoAction} className="flex flex-col gap-2">
      <Form.Error />
      <Form.Field
        icon={<Pen className="h-4 w-4" />}
        label="Title"
        name="title"
        placeholder="Do the dishes"
        required
        type="text"
      />
      <Form.Submit className="mt-2">Create Todo</Form.Submit>
    </Form>
  );
}
