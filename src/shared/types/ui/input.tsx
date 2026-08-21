import { InputHTMLAttributes, forwardRef, useId } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', id, ...props }, ref) => {
    const defaultId = useId();
    const inputId = id ?? defaultId;

    return (
      <div className="w-full space-y-1">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-zinc-300">
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={`w-full bg-zinc-900 border border-zinc-700 rounded-lg p-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition ${
            error ? 'border-red-500 focus:border-red-500' : ''
          } ${className}`}
          {...props}
        />
        {error && <span className="text-xs text-red-400 block mt-1">{error}</span>}
      </div>
    );
  }
);
Input.displayName = 'Input';