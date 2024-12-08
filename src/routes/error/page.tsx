import { FC } from "react";

import errorUnknownImage from "@/assets/images/undraw_bug_fixing.svg";
import errorNotFoundImage from "@/assets/images/undraw_taken.svg";
import { SimpleButton } from "@/components/Button/SimpleButton";
import { ErrorCore } from "@/components/Error/Core/ErrorCore";

interface ErrorPageProps {
  type?: "404" | "unknown";
}

export const ErrorPage: FC<ErrorPageProps> = ({
  type = "unknown",
}): JSX.Element => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8 max-w-lg">
        {type === "404" ? (
          <ErrorCore
            imageSrc={errorNotFoundImage}
            title="Not Found"
            message="The page you're looking for doesn't exist."
            details="The page you requested could not be found. Please check the URL and try again."
          />
        ) : (
          <ErrorCore
            imageSrc={errorUnknownImage}
            title="Oops! Something went wrong"
            message="We encountered an unexpected error."
            details="Please try again later or contact support if the problem persists."
          />
        )}
        <SimpleButton onClick={() => (window.location.href = "/")}>
          Go to Homepage
        </SimpleButton>
      </div>
    </div>
  );
};
