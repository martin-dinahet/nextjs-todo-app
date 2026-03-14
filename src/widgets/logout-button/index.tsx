"use client";

import { useTransition } from "react";
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
    <button className="btn btn-primary" disabled={pending} onClick={handleClick} type="button">
      {pending ? <span className="loading loading-spinner" /> : "Log out"}
    </button>
  );
}
