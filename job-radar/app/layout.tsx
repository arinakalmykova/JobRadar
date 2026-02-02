import { Montserrat } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/app";
import { useAppSelector } from "@/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["cyrillic"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const router = useRouter();

  useEffect(() => {
    if (!isAuth) {
      router.push("/auth/login");
    }
  }, [isAuth, router]);

  if (!isAuth) return null;
  return (
    <html lang="ru">
      <body className={`${montserrat.variable} antialiased`}>
        <header className="bg-blue p-10 text-white  ">
          <h1 className="text-2xl font-bold">JobRadar</h1>
        </header>
        <ReduxProvider>{children}</ReduxProvider>

        <footer className="bg-gray-10 text-center p-10">2026 JobRaider</footer>
      </body>
    </html>
  );
}
