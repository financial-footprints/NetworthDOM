import React, { ButtonHTMLAttributes } from "react";
import { ActionButton } from "./ActionButton";
import { ButtonVariant } from "./types";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  toggle: boolean;
  toggleOn: React.ReactNode;
  toggleOff: React.ReactNode;
  variant?: ButtonVariant;
}

export const ToggleButton: React.FC<ButtonProps> = ({
  className = "",
  fullWidth = false,
  toggle,
  toggleOn,
  toggleOff,
  ...props
}) => {
  return (
    <ActionButton className={className} fullWidth={fullWidth} {...props}>
      {toggle ? toggleOn : toggleOff}
    </ActionButton>
  );
};
