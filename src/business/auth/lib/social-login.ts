import { auth } from "@/lib/auth";
import { handle } from "@/lib/helpers/handle";

export async function socialLogin(provider: string) {
  const result = await handle(auth.api.signInSocial({ body: { provider } }));
  if (result.error) throw new Error(result.error);
  return result.data?.url;
}
