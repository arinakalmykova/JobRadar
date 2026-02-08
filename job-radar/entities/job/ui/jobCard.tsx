import type { Job } from "@/entities";
import { Button } from "@/shared";

interface JobCardProps {
  job: Job;
  onApply?: (job: Job) => void;
  applied: boolean;
  onRemove?: (jobId: number) => void;
}

export function JobCard({ job, onApply, applied, onRemove }: JobCardProps) {
  return (
    <div className="border border-[var(--color-border-focus)] p-6 rounded-md flex flex-col gap-3">
      <h3 className="text-xl font-bold text-[var(--color-border-focus)]">
        {job.title}
      </h3>
      <div className="flex flex-col gap-1">
        <p className="text-sm text-[var(--foreground)]">
          Компания: {job.company}
        </p>
        <p className="text-sm text-[var(--foreground)]">
          Локация: {job.location}
        </p>
        <p className="text-sm text-[var(--foreground)]">
          Тип работы: {job.type}
        </p>
        <p className="text-sm text-[var(--foreground)]">
          Зарплата: {job.salary}
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-8">
        <Button
          isType={"standart"}
          onClick={() => !applied && onApply?.(job)}
          disabled={applied}
        >
          {applied ? "Отклик отправлен" : "Откликнуться"}
        </Button>
        {applied && (
          <Button isType={"standart"} onClick={() => onRemove?.(job.id)}>
            Отозвать
          </Button>
        )}
      </div>
    </div>
  );
}
