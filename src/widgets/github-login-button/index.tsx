"use client";

import { GithubIcon } from "lucide-react";
import { useTransition } from "react";
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
    <button
      className="btn btn-active btn-block"
      disabled={pending}
      onClick={handleClick}
      type="button"
    >
      {pending ? (
        <span className="loading loading-spinner" />
      ) : (
        <>
          <GithubIcon />
          Login with GitHub
        </>
      )}
    </button>
  );
}
