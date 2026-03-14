"use client";

import { type ReactNode, useActionState, useId } from "react";
import type { Action } from "@/lib/types/action";
import { FormContext } from "../lib/form-context";

interface Props {
  action: Action;
  children: ReactNode;
  className?: string;
}

export function FormRoot({ action, children, className }: Props) {
  const [state, formAction, pending] = useActionState(action, { status: "idle" });
  const formId = useId();

  return (
    <FormContext.Provider value={{ state, pending, formId }}>
      <form action={formAction} className={className} noValidate>
        {children}
      </form>
    </FormContext.Provider>
  );
}
