"use client";

import { GithubIcon, Loader2 } from "lucide-react";
import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { socialLoginMutation } from "@/features/auth";
import { handle } from "@/lib/helpers/handle";

export function GithubLoginButton() {
  const [pending, startTransition] = useTransition();

  function handleClick() {
    startTransition(async () => {
      await handle(socialLoginMutation("github"));
    });
  }

  return (
    <Button
      className="w-full"
      disabled={pending}
      onClick={handleClick}
      type="button"
      variant="outline"
    >
      {pending ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <>
          <GithubIcon className="h-4 w-4" />
          Login with GitHub
        </>
      )}
    </Button>
  );
}
