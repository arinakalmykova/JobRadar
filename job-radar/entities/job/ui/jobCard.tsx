import type { Job } from "@/entities";

 export function JobCard({job}: {job:Job}) {
    return (
        <div className="border border-violet-500 p-6 rounded-md">
            <h3 className="text-xl font-bold text-violet-500">{job.title}</h3>
            <div className="flex flex-col mt-3">
            <p className="text-sm text-[var(--foreground)]">Компания:   {job.company}</p>
            <p className="text-sm text-[var(--foreground)]">Локация:   {job.location}</p>
            <p className="text-sm text-[var(--foreground)]">Тип работы:   {job.type}</p>
            <p className="text-sm text-[var(--foreground)]">Зарплата:   {job.salary}</p>
            </div>
        </div>
    )
}