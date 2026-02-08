"use client";
import type { User, Job } from "@/entities";
import { useEffect, useState } from "react";
import { fetchAppliedJobs, removeApply } from "@/entities";
import { JobCard } from "@/entities";

export function ApplyTab({ user }: { user: User }) {
  const [appliedJobs, setAppliedJobs] = useState<Job[]>([]);

  useEffect(() => {
    if (!user.id) return;

    fetchAppliedJobs(user.id).then(setAppliedJobs).catch(console.error);
  }, [user.id]);

  const handleRemove = async (jobId: number) => {
    try {
      await removeApply(user.id, jobId);
      setAppliedJobs((prev) => prev.filter((job) => job.id !== jobId));
    } catch (err) {
      console.error("Ошибка при удалении отклика", err);
    }
  };

  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Мои отклики</h2>

      {appliedJobs.length === 0 ? (
        <p>Пока нет откликов</p>
      ) : (
        <ul className="space-y-4">
          {appliedJobs.map((job) => (
            <li key={job.id}>
              <JobCard job={job} applied onRemove={handleRemove} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
