"use client";
import { useState, useEffect } from "react";
import { useSearch } from "@/features";
import { JobCard } from "@/entities";
import { Filter } from "@/widgets";
import type { Job } from "@/entities";
import { applyToJob, fetchAppliedJobs, removeApply } from "@/entities";
import { useAppSelector } from "@/app";

export function SearchResults({ searchValue }: { searchValue: string }) {
  const user = useAppSelector((state) => state.auth.user);
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [appliedJobs, setAppliedJobs] = useState<Job[]>([]);
  const { jobs } = useSearch({ search: searchValue, location, type });

  useEffect(() => {
    if (!user) return;

    fetchAppliedJobs(user.id).then(setAppliedJobs).catch(console.error);
  }, [user?.id]);
  if (!user) {
    return <p>Загрузka пользователя...</p>;
  }

  const handleApply = async (job: Job) => {
    try {
      await applyToJob(user.id, job);
      setAppliedJobs((prev) => [...prev, job]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleRemove = async (jobId: number) => {
    if (!user) return;

    try {
      await removeApply(user.id, jobId);
      setAppliedJobs((prev) => prev.filter((j) => j.id !== jobId));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className=" w-full">
      <Filter
        location={location}
        setLocation={setLocation}
        type={type}
        setType={setType}
      />
      <ul className="w-full flex flex-col gap-4">
        {jobs.map((job) => (
          <li key={job.id}>
            <JobCard
              job={job}
              applied={appliedJobs.some((j) => j.id === job.id)}
              onApply={handleApply}
              onRemove={handleRemove}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
