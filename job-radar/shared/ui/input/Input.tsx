'use client';

import { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  isAuth:boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error,isAuth, className = '', ...props }, ref) => {
        const inputClasses = isAuth
      ? `h-11 rounded-md border border-gray-300 px-3 text-[var(--text-color)] text-sm outline-none transition focus:border-violet-500 ${error ? 'border-red-500' : ''}`
      : className; 

    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label className="text-sm text-[var(--text-color)] font-semibold" htmlFor={props.id}>{label}</label>
        )}

        <input
          ref={ref}
          className={inputClasses}
          {...props}
        />

        {error && (
          <span className="text-xs text-red-500">{error}</span>
        )}
      </div>
    );
  },
);

