'use client';

import { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label className="text-sm text-black font-semibold">{label}</label>
        )}

        <input
          ref={ref}
          className={`
            h-11 rounded-md border border-gray-300 px-3
            text-sm outline-none transition
            focus:border-violet-500
            ${error ? 'border-red-500' : ''}
            ${className}
          `}
          {...props}
        />

        {error && (
          <span className="text-xs text-red-500">{error}</span>
        )}
      </div>
    );
  },
);

