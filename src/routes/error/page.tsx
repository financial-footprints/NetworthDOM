import { FC } from "react";

import errorUnknownImage from "@/assets/images/undraw_bug_fixing.svg";
import errorNotFoundImage from "@/assets/images/undraw_taken.svg";
import { SimpleButton } from "@/components/Button/SimpleButton";
import { ErrorCore } from "@/components/Error/Core/ErrorCore";
import "./styles.css";

interface ErrorPageProps {
  type?: "404" | "unknown";
}

export const ErrorPage: FC<ErrorPageProps> = ({
  type = "unknown",
}): JSX.Element => {
  return (
    <div className="error-page flex justify-center">
      <div className="error-content">
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
