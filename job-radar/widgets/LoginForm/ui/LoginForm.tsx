"use client"
import {useState,useEffect} from "react";
import {useAuth} from "@/features";
import { useAppSelector } from "@/app";
import {Input, Button} from "@/shared";
import Link from 'next/link';

export function LoginForm() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const { handleLogin,loading,error} = useAuth();

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleLogin(email,password);
    }

    return (
    <form onSubmit ={onSubmit} className="flex flex-col gap-5">
        <Input
        label="Email"
        type="email"
        placeholder="example@mail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        label="Пароль"
        type="password"
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
        <Button type="submit" isLoading={loading}>Вход</Button>
        {error && <p>{error}</p>}

        <p className="text-sm text-center text-gray-600 mt-2">
        Нет аккаунта?{' '}
        <Link
          href="/auth/register"
          className="text-violet-600 hover:underline"
        >
          Зарегистрируйтесь
        </Link>
        </p>  
    </form>
    )
}
