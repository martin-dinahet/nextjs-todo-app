"use client";

import { AlertCircle } from "lucide-react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useFormContext } from "../lib/form-context";

interface Props extends Omit<ComponentPropsWithoutRef<typeof Input>, "form"> {
  hidden?: boolean;
  icon?: ReactNode;
  label?: string;
  name: string;
}

export function FormField({ icon, label, name, hidden, ...inputProps }: Props) {
  const { state, pending, formId } = useFormContext();
  const error = state.fieldErrors?.[name];
  const inputId = `${formId}${name}`;
  const errorId = `${formId}${name}-error`;

  return (
    <div className={cn("flex flex-col gap-1.5", hidden && "hidden")}>
      {label && <Label htmlFor={inputId}>{label}</Label>}
      <div className={cn("relative flex items-center", icon && "")}>
        {icon && (
          <span className="pointer-events-none absolute left-3 text-muted-foreground">{icon}</span>
        )}
        <Input
          aria-describedby={error ? errorId : undefined}
          aria-invalid={error ? true : undefined}
          className={cn(
            icon && "pl-9",
            error && "border-destructive focus-visible:ring-destructive"
          )}
          disabled={pending}
          id={inputId}
          name={name}
          {...inputProps}
        />
      </div>
      {error && (
        <p className="flex items-center gap-1 text-destructive text-sm" id={errorId} role="alert">
          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}
