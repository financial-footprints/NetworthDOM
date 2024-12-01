import React, { InputHTMLAttributes } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  id,
  className = "",
  ...props
}) => {
  return (
    <div className="mb-5">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1.5 font-inter"
      >
        {label}
      </label>
      <input
        id={id}
        className={`
          w-full
          px-3.5
          py-2.5
          border
          border-gray-200
          rounded-lg
          shadow-sm
          focus:outline-none
          focus:ring-2
          focus:ring-gray-500
          focus:border-gray-500
          bg-white
          text-gray-900
          ${className}
        `}
        {...props}
      />
    </div>
  );
};
