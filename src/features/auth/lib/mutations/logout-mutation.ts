"use server";

import { logout } from "@/business/auth";

export const logoutMutation = async () => {
  await logout();
};
