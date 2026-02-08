"use client";
import { useEffect, useState } from "react";
import type { Job } from "@/entities";
import { fetchJobs } from "@/entities";

export function useSearch({
  search,
  location,
  type,
}: {
  search: string;
  location: string;
  type: string;
}) {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchJobs(search, location, type);
      setJobs(data);
    }
    fetchData();
  }, [search, location, type]);

  return { jobs };
}
