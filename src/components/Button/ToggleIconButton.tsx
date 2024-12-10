import React, { ButtonHTMLAttributes } from "react";
import { ToggleButton } from "./ToggleButton";
import { ButtonVariant } from "./types";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  toggle: boolean;
  toggleOn: {
    icon: React.ReactNode;
    text: string;
  };
  toggleOff: {
    icon: React.ReactNode;
    text: string;
  };
  variant?: ButtonVariant;
}

export const ToggleIconButton: React.FC<ButtonProps> = ({
  className = "",
  fullWidth = false,
  toggleOn,
  toggleOff,
  ...props
}) => {
  return (
    <ToggleButton
      toggleOn={
        <div className="flex items-center space-x-2">
          <span>{toggleOn.text}</span>
          {toggleOn.icon}
        </div>
      }
      toggleOff={
        <div className="flex items-center space-x-2">
          <span>{toggleOff.text}</span>
          {toggleOff.icon}
        </div>
      }
      {...props}
    />
  );
};
