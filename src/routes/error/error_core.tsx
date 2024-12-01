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
        <img
          src={imageSrc}
          alt="Error illustration"
          className="error-image p-8 w-[65%]"
        />
      </div>
      <h1 className="font-bold font-sans text-2xl">{title}</h1>
      <p className="error-message font-medium font-sans text-base">{message}</p>
      <p className="error-details font-normal font-sans text-sm">{details}</p>
    </>
  );
};
