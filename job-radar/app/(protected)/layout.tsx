
import { ReactNode } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface Props {
  children: ReactNode;
}

export default async function ProtectedLayout({ children }: Props) {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value ?? null;
  const userRaw = cookieStore.get("user")?.value ?? null;
  const user = userRaw ? JSON.parse(userRaw) : null;
  if (!token) {
    redirect("/auth/login");
  }

  console.log("Token cookie:", cookieStore.get("token"));
console.log("User cookie:", cookieStore.get("user"));

  return <>{children}</>;
}
