"use client";

import { Lock, Mail, User } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { emailRegisterAction } from "@/features/auth";
import { cn } from "@/lib/utils";
import { Form } from "@/shared/form";
import { GithubLoginButton } from "../github-login-button";

export function RegisterForm() {
  return (
    <div className="flex flex-col gap-4">
      <Form action={emailRegisterAction} className="flex flex-col gap-2">
        <Form.Error />
        <Form.Field
          icon={<User className="h-4 w-4" />}
          label="Name"
          name="name"
          placeholder="James"
          required
          type="text"
        />
        <Form.Field
          icon={<Mail className="h-4 w-4" />}
          label="Email"
          name="email"
          placeholder="james@mail.com"
          required
          type="email"
        />
        <Form.Field
          icon={<Lock className="h-4 w-4" />}
          label="Password"
          name="password"
          placeholder="••••••••"
          required
          type="password"
        />
        <Form.Submit className="mt-2">Register</Form.Submit>
      </Form>

      <div className="relative flex items-center gap-3 text-muted-foreground text-xs">
        <div className="h-px flex-1 bg-border" />
        OR
        <div className="h-px flex-1 bg-border" />
      </div>

      <GithubLoginButton />

      <Link className={cn(buttonVariants({ variant: "link" }), "w-full")} href="/auth/login">
        Already have an account? Login
      </Link>
    </div>
  );
}
