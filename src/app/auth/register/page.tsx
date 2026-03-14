"use client";

import { Card, CardContent } from "@/components/ui/card";
import { RegisterForm } from "@/widgets/register-form";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
      <Card className="w-full max-w-sm shadow-xl">
        <CardContent className="flex flex-col gap-4 pt-6">
          <div className="mb-2 text-center">
            <h1 className="font-bold text-2xl">Welcome</h1>
            <p className="mt-1 text-muted-foreground text-sm">Create your account</p>
          </div>
          <RegisterForm />
        </CardContent>
      </Card>
    </div>
  );
}
