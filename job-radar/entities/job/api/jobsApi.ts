import { JOBS_API_URL } from "@/shared";
import { Job } from "@/entities";

export const fetchJobs = async (
  search?: string,
  location?: string,
  type?:string
): Promise<Job[]> => {
   const params = new URLSearchParams();

  if (search) params.append("search", search);
  if (location) params.append("location", location);
  if (type) params.append("type", type);

  const response = await fetch(
    `${JOBS_API_URL}?${params.toString()}`
  );

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status}`);
  }

  return response.json();
};


