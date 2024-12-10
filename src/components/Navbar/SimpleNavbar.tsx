import React from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { routes } from "@/router";
import "./styles.css";

export const SimpleNavbar: React.FC<{
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}> = ({ isCollapsed, setIsCollapsed }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <Link to="/" className="navbar-logo">
            NetworthDB
          </Link>
          <button
            className="navbar-menu-toggle"
            onClick={() => setIsCollapsed(!isCollapsed)}
            aria-label={isCollapsed ? "Open menu" : "Close menu"}
          >
            {isCollapsed ? <HiMenuAlt3 size={20} /> : <RxCross2 size={20} />}
          </button>
        </div>

        <div className={`navbar-menu ${isCollapsed ? "" : "open"}`}>
          {routes
            .filter((route) => route.sidebar.show)
            .map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className="navbar-menu-item"
                onClick={() => setIsCollapsed(true)}
              >
                {route.sidebar.icon && (
                  <span className="navbar-menu-icon">{route.sidebar.icon}</span>
                )}
                <span>{route.label}</span>
              </Link>
            ))}
        </div>
      </div>
    </nav>
  );
};
