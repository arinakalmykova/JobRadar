"use client";
import {Logo} from "@/widgets";
import {Moon, Sun, User} from "lucide-react";
import { useTheme } from "next-themes";

export function Header() {
    const {theme,setTheme}= useTheme();
    return (
        <header className="border-b border-[var(--color-border)] sticky top-0 z-0 backdrop-blur-sm dark:border-[var(--color-border)]">
            <div className="flex justify-between items-center px-10 py-7 w-full ">
                <Logo isAuth={false}/>            
                <div className="flex gap-10 cursor-pointer">
                  <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                    {theme === "dark"? <Sun/>: <Moon/>}
                  </button>
                  <User/>
                </div>
            </div>
        </header>
    )
}