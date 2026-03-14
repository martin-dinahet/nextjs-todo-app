"use client";

import { Card, CardContent } from "@/components/ui/card";
import { LoginForm } from "@/widgets/login-form";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
      <Card className="w-full max-w-sm shadow-xl">
        <CardContent className="flex flex-col gap-4 pt-6">
          <div className="mb-2 text-center">
            <h1 className="font-bold text-2xl">Welcome back</h1>
            <p className="mt-1 text-muted-foreground text-sm">Sign in to your account</p>
          </div>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}
