"use client";
import { LoginForm } from "@/widgets/";
import { Radar } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md  ">
      <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl mb-4 shadow-lg">
            <Radar className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-semibold text-foreground mb-2">С возвращением!</h1>
          <p className="text-muted-foreground">Войдите, чтобы продолжить работу в JobRadar</p>
      </div>
      <LoginForm />
    </div>
  );
}
