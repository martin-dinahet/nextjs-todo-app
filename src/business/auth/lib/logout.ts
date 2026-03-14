import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { handle } from "@/lib/helpers/handle";

export async function logout() {
  const result = await handle(auth.api.signOut({ headers: await headers() }));
  if (result.error) throw new Error(result.error);
}
