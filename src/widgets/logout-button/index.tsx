"use client";

import { Loader2 } from "lucide-react";
import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { logoutMutation } from "@/features/auth";
import { handle } from "@/lib/helpers/handle";

export function LogoutButton() {
  const [pending, startTransition] = useTransition();

  function handleClick() {
    startTransition(async () => {
      await handle(logoutMutation());
    });
  }

  return (
    <Button disabled={pending} onClick={handleClick} type="button">
      {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : "Log out"}
    </Button>
  );
}
