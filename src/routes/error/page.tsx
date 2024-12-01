import { FC } from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

import errorUnknownImage from "@/assets/images/undraw_bug_fixing.svg";
import errorNotFoundImage from "@/assets/images/undraw_taken.svg";
import { SimpleButton } from "@/components/Button/SimpleButton";
import { ErrorCore } from "./error_core";
import "./styles.css";

export const ErrorPage: FC = (): JSX.Element => {
  const error = useRouteError();
  const is404 = isRouteErrorResponse(error) && error.status === 404;

  return (
    <div className="error-page flex justify-center">
      <div className="error-content">
        {is404 ? (
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
