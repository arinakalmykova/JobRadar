import { Resume } from "@/entities";

export type User = {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
  resume: Resume;
};
