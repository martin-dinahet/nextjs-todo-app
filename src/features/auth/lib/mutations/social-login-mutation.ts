"use server";

import { redirect } from "next/navigation";
import { socialLogin } from "@/business/auth";

export const socialLoginMutation = async (provider: string) => {
  const url = await socialLogin(provider);
  if (url) redirect(url);
};
