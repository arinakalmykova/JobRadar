import { Button, Input } from "@/shared";
import type { User } from "@/entities";
import { useResume } from "@/features";

export function ResumeForm({ user }: { user: User }) {
  const { formData, loading, message, handleChange, handleSave } =
    useResume(user);

  return (
    <div className="w-full p-5 border rounded-lg shadow-md mx-auto flex flex-col gap-4 border-[var(--color-border)]">
      <Input
        label={"ФИО"}
        isType={"resume"}
        type="text"
        name="fullName"
        placeholder="ФИО"
        value={formData.fullName}
        onChange={handleChange}
        className="p-2 border rounded w-full border-[var(--color-border)] text-[var(--color-border-focus)]"
      />
      <Input
        label={"Город"}
        isType={"resume"}
        type="text"
        name="city"
        placeholder="Город"
        value={formData.city}
        onChange={handleChange}
        className="p-2 border rounded w-full border-[var(--color-border)] text-[var(--color-border-focus)]"
      />
      <Input
        label={"Возраст"}
        isType={"resume"}
        type="number"
        name="age"
        placeholder="Возраст"
        value={formData.age}
        onChange={handleChange}
        className="p-2 border rounded w-full border-[var(--color-border)] text-[var(--color-border-focus)]"
      />
      <Input
        label={"Желаемая зарплата"}
        isType={"resume"}
        type="text"
        name="desiredSalary"
        placeholder="Желаемая зарплата"
        value={formData.desiredSalary}
        onChange={handleChange}
        className="p-2 border rounded w-full border-[var(--color-border)] text-[var(--color-border-focus)]"
      />
      <Input
        label={"Желаемая специальность"}
        isType={"resume"}
        type="text"
        name="desiredSpecialty"
        placeholder="Желаемая специальность"
        value={formData.desiredSpecialty}
        onChange={handleChange}
        className="p-2 border rounded w-full border-[var(--color-border)] text-[var(--color-border-focus)]"
      />
      <Input
        label={"Навыки"}
        isType={"resume"}
        type="text"
        name="skills"
        placeholder="Навыки (через запятую)"
        value={formData.skills}
        onChange={handleChange}
        className="p-2 border rounded w-full border-[var(--color-border)] text-[var(--color-border-focus)] placeholder:text-[var(--color-border)] outline-none focus:border-[var(--color-border-ficus)]"
      />
      <label
        htmlFor="desiredJobType"
        className="text-sm text-[var(--foreground)] font-semibold"
      >
        Желаемый тип работы
      </label>
      <select
        name="desiredJobType"
        value={formData.desiredJobType}
        onChange={handleChange}
        className="p-2 border -mt-3 rounded w-full border-[var(--color-border)] text-[var(--color-border-focus)] "
      >
        <option value="">Выберите</option>
        <option value="full-time">Полная занятость</option>
        <option value="part-time">Частичная занятость</option>
        <option value="remote">Удалённая</option>
        <option value="freelance">Фриланс</option>
      </select>

      <Input
        label={"Образование"}
        isType={"resume"}
        type="text"
        name="education"
        placeholder="Образование"
        value={formData.education}
        onChange={handleChange}
        className="p-2 border rounded w-full border-[var(--color-border)] text-[var(--color-border-focus)] placeholder:text-[var(--color-border)] outline-none focus:border-[var(--color-border-ficus)]"
      />
      <div className="flex gap-4 mt-2">
        <Button onClick={handleSave} isType={"standart"}>
          {loading ? "Сохраняем..." : "Сохранить"}
        </Button>
      </div>
      {message && <p className="text-sm text-gray-700 mt-2">{message}</p>}
    </div>
  );
}
