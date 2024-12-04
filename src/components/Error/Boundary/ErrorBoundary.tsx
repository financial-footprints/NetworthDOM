import React, { Component, ErrorInfo, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import { ErrorPage } from "@/routes/error/page";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

function WithNavigate(props: ErrorBoundaryProps) {
  const navigate = useNavigate();
  return <ErrorBoundary {...props} navigate={navigate} />;
}

class ErrorBoundary extends Component<
  ErrorBoundaryProps & { navigate: (path: string) => void },
  ErrorBoundaryState
> {
  constructor(
    props: ErrorBoundaryProps & { navigate: (path: string) => void }
  ) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  handleNavigateHome = () => {
    this.props.navigate("/");
  };

  render() {
    if (this.state.hasError) {
      return <ErrorPage />;
    }

    return this.props.children;
  }
}

export default WithNavigate;
