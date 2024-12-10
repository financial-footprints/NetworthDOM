import React from "react";
import { Link } from "react-router-dom";
import { routes } from "@/router";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import "./styles.css";

export const SimpleSidebar: React.FC<{
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}> = ({ isCollapsed, setIsCollapsed }) => {
  return (
    <nav className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <button
        className="sidebar-toggle-button"
        onClick={() => setIsCollapsed(!isCollapsed)}
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {isCollapsed ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
      </button>
      <ul className="sidebar-menu">
        {routes
          .filter((route) => route.sidebar.show)
          .map((route) => (
            <li key={route.path} className="sidebar-menu-item">
              <Link to={route.path} className="sidebar-menu-link">
                {route.sidebar.icon && (
                  <span className="sidebar-icon">{route.sidebar.icon}</span>
                )}
                <span className="sidebar-label">{route.label}</span>
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};
