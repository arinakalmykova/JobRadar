"use client"
import { useAppSelector } from "@/app";

export default function Home() {
  const user = useAppSelector((state) => state.auth.user);
  return (
    <main className="flex min-h-screen items-center justify-center flex-col gap-5">
      <h1>Привет, {user?.name}</h1>
      <h2 className="text-3xl font-bold">Добро пожаловать в JobRadar!</h2>
      <p>Умный поиск вакансий для разработчиков</p>
      <button className="bg-white text-black p-4 rounded-md">
        Начать поиск
      </button>
    </main>
  );
}
