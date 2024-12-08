import React from "react";
import "./styles.css";
import { SimpleSidebar } from "./SimpleSidebar";
import { SimpleNavbar } from "./SimpleNavbar";

export const Navbar: React.FC = () => {
  return (
    <>
      <SimpleNavbar />
      <SimpleSidebar />
    </>
  );
};
