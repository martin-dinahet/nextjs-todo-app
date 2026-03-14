"use server";

import { socialLogin } from "@/business/auth";

export const socialLoginMutation = async (provider: string) => {
  await socialLogin(provider);
};
