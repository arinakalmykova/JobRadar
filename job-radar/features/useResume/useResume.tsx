"use client";
import { useState, useEffect } from "react";
import type { User, Resume } from "@/entities";
import { resumeUser, fetchResume } from "@/entities";

export function useResume(user: User) {
  const [formData, setFormData] = useState<Resume>({
    fullName: user.name || "",
    city: "",
    age: "",
    desiredSalary: "",
    desiredSpecialty: "",
    skills: "",
    desiredJobType: "",
    education: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user?.id) return;

    const loadResume = async () => {
      try {
        setLoading(true);
        const data = await fetchResume(user.id);

        if (data && Object.keys(data).length > 0) {
          setFormData((prev) => ({ ...prev, ...data }));
        }
      } catch (err) {
        console.error("Ошибка при загрузке резюме:", err);
      } finally {
        setLoading(false);
      }
    };

    loadResume();
  }, [user?.id]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    setLoading(true);
    setMessage("");
    try {
      const res = await resumeUser(formData, user);
      setMessage(res.message);
    } catch (err) {
      setMessage((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    loading,
    message,
    handleChange,
    handleSave,
  };
}
