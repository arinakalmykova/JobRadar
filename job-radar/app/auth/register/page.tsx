"use client";
import { RegisterForm } from "@/widgets";
import { Logo } from "@/widgets";

export default function RegisterPage() {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md  ">
      <div className="text-center mb-8">
        <Logo isAuth={true} />
        <div className=" flex flex-col mt-7 text-[var(--text-color)]">
          <h1 className="text-3xl font-semibold mb-2">Добро пожаловать!</h1>
          <p>Зарегистрируйтесь, чтобы начать работу в JobRadar</p>
        </div>
      </div>
      <RegisterForm />
    </div>
  );
}
