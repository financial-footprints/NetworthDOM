import React from "react";
import "./styles.css";
import { SimpleSidebar } from "./SimpleSidebar";
import { SimpleNavbar } from "./SimpleNavbar";

export const Navbar: React.FC<{
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}> = ({ isCollapsed, setIsCollapsed }) => {
  return (
    <>
      <SimpleNavbar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <SimpleSidebar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />
    </>
  );
};
