"use client";
import { Search as SearchIcon } from "lucide-react";
import { Input } from "@/shared";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className="w-full relative group">
      <SearchIcon className="stroke-[var(--color-border)] absolute m-4 group-focus-within:stroke-[var(--color-border-focus)]" />
      <Input
        id="search"
        name="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        isType={""}
        placeholder="Поиск..."
        className="w-full placeholder:text-[var(--color-border)] text-[var(--color-border-focus)]  pl-12 border border-[var(--color-border-focus)] rounded-full outline-none transition p-4 focus:border-[var(--color-border-focus)] "
      />
    </div>
  );
}
