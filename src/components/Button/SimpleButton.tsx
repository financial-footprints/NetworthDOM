import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
}

export const SimpleButton: React.FC<ButtonProps> = ({
  children,
  className = "",
  fullWidth = false,
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
        py-2.5
        px-4
        rounded-lg
        focus:outline-none
        focus:ring-2
        focus:ring-gray-500
        focus:ring-offset-2
        transition-all
        duration-200
        font-medium
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};
