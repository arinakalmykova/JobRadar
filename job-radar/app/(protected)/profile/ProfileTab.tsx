"use client";
import type { User } from "@/entities";
import { useProfile } from "@/features";
import { Button, deleteUser } from "@/shared";
import { useRef } from "react";
import { setUser, useAppDispatch, clearUser } from "@/app";
import { useRouter } from "next/navigation";

export function ProfileTab({ user }: { user: User }) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { handleAvatarChange, uploadAvatar, loading, error, message } =
    useProfile({
      user,
      setUser: (u: User) => dispatch(setUser(u)),
    });

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const onAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleLogout = () => {
    dispatch(clearUser());
    deleteUser();
    router.push("/auth/login");
  };

  return (
    <section className="flex flex-col justify-between h-full md:flex-row gap-10">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold mb-4">Профиль</h2>
          <p>
            <strong>Имя: </strong>
            {user.name}
          </p>
          <p>
            <strong>Email: </strong>
            {user.email}
          </p>
        </div>
        <Button onClick={handleLogout} isType={"standart"}>
          Выйти
        </Button>
      </div>

      <div className="flex flex-col items-center gap-10">
        <img
          src={
            user.avatar ||
            "https://cdn-icons-png.flaticon.com/512/149/149071.png"
          }
          onClick={onAvatarClick}
          alt="avatar"
          className="w-70 h-70 cursor-pointer rounded-full object-cover border-[var(--color-border-focus)] border-2"
        />
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          onChange={handleAvatarChange}
          className="hidden"
        />
        <Button isType={"standart"} onClick={uploadAvatar}>
          {loading
            ? "Загрузка..."
            : error
              ? `${error}`
              : message
                ? `${message}`
                : "Загрузить фото"}
        </Button>
      </div>
    </section>
  );
}
