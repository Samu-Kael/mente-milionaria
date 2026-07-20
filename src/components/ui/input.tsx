import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, ...props }: InputProps) {
  return (
    <div className="w-full">
      <label className="block text-xs font-semibold text-gray-400 uppercase mb-1 tracking-wider">
        {label}
      </label>
      <input
        {...props}
        required
        className="w-full bg-gray-950 border border-gray-800 rounded-lg p-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-gray-600 transition-colors text-sm"
      />
    </div>
  );
}