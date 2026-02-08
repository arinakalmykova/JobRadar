"use client";
import { Logo } from "@/widgets";
import { Moon, Sun, User } from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="border-b border-[var(--color-border)] sticky top-0 z-0 backdrop-blur-sm dark:border-[var(--color-border)]">
      <div className="flex justify-between items-center px-10 py-7 w-full ">
        <Logo isAuth={false} onClick={() => router.push("/")} />
        <div className="flex gap-10 cursor-pointer">
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
          <User onClick={() => router.push("/profile")} />
        </div>
      </div>
    </header>
  );
}
