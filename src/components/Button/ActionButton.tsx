import React, { ButtonHTMLAttributes } from "react";
import { ButtonVariant } from "./types";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  children: React.ReactNode;
  variant?: ButtonVariant;
}

export const ActionButton: React.FC<ButtonProps> = ({
  className = "",
  fullWidth = false,
  variant = "normal",
  children,
  ...props
}) => {
  return (
    <button
      className={`
        ${
          !props.disabled
            ? "bg-gray-900 hover:bg-gray-800"
            : "bg-gray-500 cursor-not-allowed"
        }
        text-white
        ${variant === "thin" ? "py-1.5" : "py-2.5"}
        ${variant === "thin" ? "px-3" : "px-4"}
        rounded-lg
        focus:outline-none
        focus:ring-2
        focus:ring-gray-500
        focus:ring-offset-2
        transition-all
        duration-200
        ${variant === "thin" ? "text-sm" : "font-medium"}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};
