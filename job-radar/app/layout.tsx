import { Montserrat } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/app";
import {AuthInit} from "@/app";

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

  return (
    <html lang="ru">
      <body className={`${montserrat.variable} antialiased`}>
        <ReduxProvider><AuthInit/>{children}</ReduxProvider>
      </body>
    </html>
  );
}
