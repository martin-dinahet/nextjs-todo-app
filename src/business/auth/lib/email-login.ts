import { auth } from "@/lib/auth";
import { handle } from "@/lib/helpers/handle";

export async function emailLogin(email: string, password: string) {
  const result = await handle(auth.api.signInEmail({ body: { email, password } }));
  if (result.error) throw new Error(result.error);
}
