"use client";
import { avatarUser } from "@/entities";
import { useState } from "react";
import type { User } from "@/entities";
import Cookies from "js-cookie";

interface UseProfileProps {
  user: User;
  setUser: (user: User) => void;
}

export function useProfile({ user, setUser }: UseProfileProps) {
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setAvatarFile(e.target.files[0]);
    }
  };

  const uploadAvatar = async () => {
    if (!avatarFile) return;

    try {
      setLoading(true);
      setError(null);

      const updatedUser = await avatarUser(avatarFile, user);
      setMessage(updatedUser.message);
      setUser(updatedUser.user);
      Cookies.set("user", JSON.stringify(updatedUser.user), { expires: 7 });
    } catch (e) {
      setError("Не удалось загрузить фото");
    } finally {
      setLoading(false);
    }
  };

  return {
    handleAvatarChange,
    uploadAvatar,
    loading,
    error,
    message,
  };
}
