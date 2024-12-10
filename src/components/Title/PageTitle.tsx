import React from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { ToggleButton } from "../Button/ToggleButton";

export const PageTitle: React.FC<{
  title: string;
  buttons: React.ReactNode[];
}> = ({ title, buttons }) => {
  return (
    <div className="ml-4 flex items-center justify-between mb-8 pb-4 border-b-2 border-gray-200">
      <h1 className="text-4xl font-extrabold font-serif text-gray-800">
        {title}
      </h1>
      <div className="flex space-x-4">{buttons}</div>
    </div>
  );
};
