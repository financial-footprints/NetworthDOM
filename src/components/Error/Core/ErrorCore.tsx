import { FC } from "react";

interface ErrorCoreProps {
  imageSrc: string;
  title: string;
  message: string;
  details: string;
}

export const ErrorCore: FC<ErrorCoreProps> = ({
  imageSrc,
  title,
  message,
  details,
}): JSX.Element => {
  return (
    <>
      <div className="flex justify-center">
        <img src={imageSrc} alt="Error illustration" className="p-8 w-[65%]" />
      </div>
      <h1 className="font-bold font-sans text-3xl text-gray-800 p-4">
        {title}
      </h1>
      <p className="text-xl text-gray-600 mb-2 font-medium font-sans">
        {message}
      </p>
      <p className="text-gray-500 mb-8 font-normal font-sans text-sm">
        {details}
      </p>
    </>
  );
};
