import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { Header, Footer } from "@/widgets";
import { getUser } from "@/shared";

interface Props {
  children: ReactNode;
}

export default async function ProtectedLayout({ children }: Props) {
  const { token } = await getUser();
  console.log(token);
  if (!token) {
    redirect("/auth/login");
  }

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
