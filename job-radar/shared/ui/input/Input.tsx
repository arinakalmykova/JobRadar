"use client";

import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  isType: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, isType, className = "", ...props }, ref) => {
    const auth = `h-11 rounded-md border border-gray-300 px-3 text-[var(--text-color)] text-sm outline-none transition focus:border-[var(--color-border-focus)] ${error ? "border-red-500" : ""}`;
    const resume = `p-2 border rounded w-full border-[var(--color-border)] text-[var(--color-border-focus)] placeholder:text-[var(--color-border)] outline-none focus:border-[var(--color-border-ficus)]`;
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label
            className="text-sm text-[var(--foreground)] font-semibold "
            htmlFor={props.id}
          >
            {label}
          </label>
        )}

        <input
          ref={ref}
          className={
            isType === "resume" ? resume : isType === "auth" ? auth : className
          }
          {...props}
        />

        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    );
  },
);
