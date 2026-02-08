"use client";
import { useState } from "react";
import { useAuth } from "@/features";
import { Input, Button } from "@/shared";
import Link from "next/link";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin, loading, error } = useAuth();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col justify-center gap-5">
      <Input
        id="email"
        isType={"auth"}
        label="Email"
        type="email"
        placeholder="example@mail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        id="password"
        isType={"auth"}
        label="Пароль"
        type="password"
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button isType={"standart"} type="submit" isLoading={loading}>
        Вход
      </Button>
      {error && <p className="text-center">{error}</p>}

      <p className="text-sm text-center text-gray-600 mt-2">
        Нет аккаунта?{" "}
        <Link href="/auth/register" className="text-violet-600 hover:underline">
          Зарегистрируйтесь
        </Link>
      </p>
    </form>
  );
}
