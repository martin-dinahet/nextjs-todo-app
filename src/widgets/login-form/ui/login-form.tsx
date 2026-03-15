"use client";

import { Lock, Mail } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { emailLoginAction } from "@/features/auth";
import { cn } from "@/lib/utils";
import { Form } from "@/shared/form";
import { GithubLoginButton } from "@/widgets/github-login-button";

export function LoginForm() {
  return (
    <div className="fade-in-0 slide-in-from-bottom-2 flex animate-in flex-col gap-6 duration-300">
      <Form action={emailLoginAction} className="flex flex-col gap-4">
        <Form.Error />
        <Form.Field
          autoComplete="email"
          icon={<Mail className="h-4 w-4" />}
          label="Email"
          name="email"
          placeholder="james@mail.com"
          required
          type="email"
        />
        <Form.Field
          autoComplete="current-password"
          icon={<Lock className="h-4 w-4" />}
          label="Password"
          name="password"
          placeholder="••••••••"
          required
          type="password"
        />
        <div className="-mt-1 flex justify-end">
          <Link
            className={cn(
              buttonVariants({ variant: "link" }),
              "h-auto p-0 text-muted-foreground text-xs hover:text-foreground"
            )}
            href="/auth/forgot-password"
          >
            Forgot password?
          </Link>
        </div>
        <Form.Submit className="mt-1 w-full">Login</Form.Submit>
      </Form>

      <div className="relative flex items-center gap-3 font-medium text-[11px] text-muted-foreground uppercase tracking-widest">
        <div className="h-px flex-1 bg-border" />
        or
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="flex flex-col gap-3">
        <GithubLoginButton />
        <Link
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "w-full text-muted-foreground text-sm"
          )}
          href="/auth/register"
        >
          Don't have an account? <span className="font-medium text-foreground">Sign up</span>
        </Link>
      </div>
    </div>
  );
}
