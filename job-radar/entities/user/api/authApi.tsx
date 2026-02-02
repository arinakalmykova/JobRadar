import { API_URL } from "@/shared";
import { User } from "@/entities";

export const loginUser = async (
  email: string,
  password: string,
): Promise<{ token: string; user: User }> => {
  const response = await fetch(`${API_URL}/login`, {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
};

export const registerUser = async (
  name: string,
  email: string,
  password: string,
): Promise<{ token: string; user: User }> => {
  const response = await fetch(`${API_URL}/register`, {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });
  return response.json();
};
