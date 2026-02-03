"use client";
import { useState } from "react";
import {useAppDispatch} from "@/app";
import { setUser } from "@/app";
import { loginUser, registerUser } from "@/entities";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

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
      Cookies.set("token", data.token, { expires: 1/24 });
      Cookies.set("user", JSON.stringify(data.user), { expires: 1/24 });
      dispatch(setUser(data.user ));
      router.push("/");
    } catch (err: any) {
      setError(err.response?.data?.message || "Ошибка входа");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (name: string,email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      const data = await registerUser(name, email, password);
      Cookies.set("token", data.token, { expires: 1/24 });
      Cookies.set("user", JSON.stringify(data.user), { expires: 1/24 });
      dispatch(setUser(data.user ));
      router.push("/");
    } catch (err: any) {
      setError(err.response?.data?.message || "Ошибка регистрации");
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, handleRegister, loading, error };
};
