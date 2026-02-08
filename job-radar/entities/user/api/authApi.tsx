import { AUTH_API_URL, AVATAR_API_URL } from "@/shared";
import { User } from "@/entities";

export const loginUser = async (
  email: string,
  password: string,
): Promise<{ token: string; user: User }> => {
  const response = await fetch(`${AUTH_API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status}`);
  }

  return response.json();
};

export const registerUser = async (
  name: string,
  email: string,
  password: string,
): Promise<{ token: string; user: User }> => {
  const response = await fetch(`${AUTH_API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status}`);
  }

  return response.json();
};

export const avatarUser = async (
  avatarFile: File,
  user: User,
): Promise<{ message: string; user: User }> => {
  const formData = new FormData();
  formData.append("avatar", avatarFile);
  formData.append("userId", String(user.id));
  const response = await fetch(`${AVATAR_API_URL}`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status}`);
  }

  return response.json();
};
