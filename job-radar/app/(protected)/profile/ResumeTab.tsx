import { ResumeForm } from "@/widgets";
import type { User } from "@/entities";

export function ResumeTab({ user }: { user: User }) {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Моё резюме</h2>
      <ResumeForm user={user} />
    </section>
  );
}
