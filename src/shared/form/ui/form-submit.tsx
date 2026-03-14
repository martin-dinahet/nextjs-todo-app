"use client";

import { Loader2 } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useFormContext } from "../lib/form-context";

interface Props {
  children: ReactNode;
  className?: string;
}

export function FormSubmit({ children, className }: Props) {
  const { pending } = useFormContext();

  return (
    <Button
      aria-disabled={pending}
      className={cn("w-full", className)}
      disabled={pending}
      type="submit"
    >
      {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : children}
    </Button>
  );
}
