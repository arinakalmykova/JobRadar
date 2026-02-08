import { RESUME_API_URL } from "@/shared";
import { User, Resume } from "@/entities";

export const resumeUser = async (
  formData: Resume,
  user: User,
): Promise<{ message: string }> => {
  const response = await fetch(`${RESUME_API_URL}/${user.id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...formData,
      avatar: user.avatar,
    }),
  });

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status}`);
  }

  return response.json();
};

export const fetchResume = async (
  userId: string,
): Promise<Record<string, any>> => {
  try {
    const response = await fetch(`${RESUME_API_URL}/${userId}`);

    if (!response.ok) {
      if (response.status === 404) return {}; // резюме нет
      throw new Error(`Ошибка при получении резюме: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return {};
  }
};
