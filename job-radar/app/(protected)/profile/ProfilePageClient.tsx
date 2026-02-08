"use client";
import { useState} from "react";
import { Button } from "@/shared";
import { ProfileTab } from "./ProfileTab";
import { ResumeTab } from "./ResumeTab";
import { ApplyTab } from "./ApplyTab";
import { useAppSelector } from "@/app";

export default function ProfilePageClient() {
  const user = useAppSelector((state) => state.auth.user);
  const [activeTab, setActiveTab] = useState<
    "info" | "resume" | "applied" | "recommended"
  >("info");

  return (
    <div className="p-10 max-w-5xl mx-auto flex flex-col gap-8">
      <div className="flex gap-4 border-b border-[var(--color-border)] mb-5 overflow-x-auto md:overflow-x-visible">
        {["info", "resume", "applied"].map((tab) => (
          <Button
            isType={""}
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-4 py-2 -mb-px border-b-2 border-[var(--color-border-focus)] font-semibold transition ${
              activeTab === tab
                ? "border-[var(--color-border-focus)] text-[var(--color-border-focus)]"
                : "border-transparent text-[var(--color-border)]"
            }`}
          >
            {tab === "info"
              ? "Информация"
              : tab === "resume"
                ? "Резюме"
                : "Отклики"}
          </Button>
        ))}
      </div>

      {activeTab === "info" && user && <ProfileTab user={user} />}

      {activeTab === "resume" && user && <ResumeTab user={user} />}

      {activeTab === "applied" && user && <ApplyTab user={user} />}
    </div>
  );
}
