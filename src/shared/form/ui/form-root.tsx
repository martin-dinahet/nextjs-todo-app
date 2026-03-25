"use client";

import { type ReactNode, useActionState, useEffect, useId, useRef } from "react";
import type { Action } from "@/lib/types/action";
import { FormContext } from "../lib/form-context";

interface Props {
  action: Action;
  children: ReactNode;
  className?: string;
  onSuccess?: () => void;
}

export function FormRoot({ action, children, className, onSuccess }: Props) {
  const [state, formAction, pending] = useActionState(action, { status: "idle" });
  const formId = useId();
  const onSuccessRef = useRef(onSuccess);

  useEffect(() => {
    onSuccessRef.current = onSuccess;
  }, [onSuccess]);

  useEffect(() => {
    if (state.status === "success") {
      onSuccessRef.current?.();
    }
  }, [state]);

  return (
    <FormContext.Provider value={{ state, pending, formId }}>
      <form action={formAction} className={className} noValidate>
        {children}
      </form>
    </FormContext.Provider>
  );
}
