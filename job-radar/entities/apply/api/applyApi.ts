import type { Job } from "@/entities";
import { APPLY_API_URL } from "@/shared";

export async function applyToJob(userId: string, job: Job) {
  const res = await fetch(`${APPLY_API_URL}/${userId}/applied`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Ошибка отклика");
  }

  return res.json();
}

export async function fetchAppliedJobs(userId: string): Promise<Job[]> {
  const res = await fetch(`${APPLY_API_URL}/${userId}/applied`);

  if (!res.ok) {
    throw new Error("Не удалось загрузить отклики");
  }

  return res.json();
}

export async function removeApply(userId: string, jobId: number) {
  const res = await fetch(`${APPLY_API_URL}/${userId}/${jobId}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Не удалось удалить отклик");
  }

  return res.json();
}
