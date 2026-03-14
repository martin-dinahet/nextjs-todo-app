"use client";

import { AlertCircle, CheckCircle, Info } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useFormContext } from "../lib/form-context";

export function FormError() {
  const { state } = useFormContext();

  const rootError = state.fieldErrors?.root;
  const message = state.message;

  if (!(rootError || message)) return null;

  return (
    <div className="flex flex-col gap-2">
      {rootError && (
        <Alert role="alert" variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{rootError}</AlertDescription>
        </Alert>
      )}
      {message && (
        <Alert role="status">
          {state.status === "success" ? (
            <CheckCircle className="h-4 w-4" />
          ) : (
            <Info className="h-4 w-4" />
          )}
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}
