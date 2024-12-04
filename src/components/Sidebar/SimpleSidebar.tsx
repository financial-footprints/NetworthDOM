import React, { useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "@/router";
import "./styles.css";

export const SimpleSidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <button
        className="collapse-button"
        onClick={() => setIsCollapsed(!isCollapsed)}
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {isCollapsed ? "→" : "←"}
      </button>
      <nav>
        <ul>
          {routes
            .filter((route) => route.showInSidebar)
            .map((route) => (
              <li key={route.path}>
                <Link to={route.path} className="link-button">
                  {route.label}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
};
