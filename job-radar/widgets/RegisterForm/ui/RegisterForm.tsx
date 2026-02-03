"use client"
import {useState} from "react";
import {useAuth} from "@/features";
import {Input, Button} from "@/shared";
import Link from 'next/link';

export function RegisterForm() {
    const [name,setName]= useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const { handleRegister,loading,error} = useAuth();

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleRegister(name,email,password);
    }
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
         <Input
        label="Имя"
        type="text"
        placeholder="Иван"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <Button type="submit" isLoading={loading}>Зарегистрироваться</Button>
        {error && <p>{error}</p>}
         <p className="text-sm text-center text-gray-600 mt-2">
        Есть аккаунт?{' '}
        <Link
          href="/auth/login"
          className="text-violet-600 hover:underline"
        >
          Войдите
        </Link>
        </p>  
    </form>
  );
}
