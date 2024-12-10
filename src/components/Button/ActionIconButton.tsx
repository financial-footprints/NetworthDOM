import React, { ButtonHTMLAttributes } from "react";
import { ActionButton } from "./ActionButton";
import { ButtonVariant } from "./types";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  actionText: string;
  actionIcon: React.ReactNode;
  variant?: ButtonVariant;
}

export const ActionIconButton: React.FC<ButtonProps> = ({
  className = "",
  fullWidth = false,
  actionText,
  actionIcon,
  ...props
}) => {
  return (
    <ActionButton className={className} fullWidth={fullWidth} {...props}>
      <div className="flex items-center space-x-2">
        <span>{actionText}</span>
        {actionIcon}
      </div>
    </ActionButton>
  );
};
