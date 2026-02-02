"use client";
import { useState } from "react";
import { useAppDispatch } from "@/app";
import { login } from "@/app";
import { loginUser, registerUser } from "@/entities";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const handleLogin = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      const data = await loginUser(email, password);
      dispatch(login({ token: data.token, user: data.user }));
      localStorage.setItem("token", data.token);
      router.push("/page");
    } catch (err: any) {
      setError(err.response?.data?.message || "Ошибка входа");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (
    name: string,
    email: string,
    password: string,
  ) => {
    try {
      setLoading(true);
      setError(null);
      const data = await registerUser(name, email, password);
      dispatch(login({ token: data.token, user: data.user }));
      localStorage.setItem("token", data.token);
    } catch (err: any) {
      setError(err.response?.data?.message || "Ошибка регистрации");
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, handleRegister, loading, error };
};
