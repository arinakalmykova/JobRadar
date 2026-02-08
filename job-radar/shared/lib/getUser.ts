"use server";
import { cookies } from "next/headers";

export async function getUser() {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value ?? null;
  const userRaw = cookieStore.get("user")?.value ?? null;
  const user = userRaw ? JSON.parse(userRaw) : null;
  return { token, user };
}
