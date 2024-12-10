import { useContext, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import ErrorBoundary from "../Error/Boundary/ErrorBoundary";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <ErrorBoundary>
      <div className="flex min-h-screen">
        <Navbar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <main
          className={`flex-1 transition-all duration-300 ${
            isCollapsed ? "lg:pl-[56px]" : "lg:pl-[200px]"
          }`}
        >
          {children}
        </main>
      </div>
    </ErrorBoundary>
  );
};
