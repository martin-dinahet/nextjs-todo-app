"use client";

import { Loader2 } from "lucide-react";
import { useTransition } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { logoutMutation } from "@/features/auth";
import { handle } from "@/lib/helpers/handle";

export function LogoutButton() {
  const [pending, startTransition] = useTransition();

  function handleClick() {
    startTransition(async () => {
      const result = await handle(logoutMutation());
      if (result.error) {
        toast.error("Failed to logout.");
        return;
      }
      toast.success("Logged out successfully.");
    });
  }

  return (
    <Button disabled={pending} onClick={handleClick} type="button" variant="outline">
      {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : "Log out"}
    </Button>
  );
}
