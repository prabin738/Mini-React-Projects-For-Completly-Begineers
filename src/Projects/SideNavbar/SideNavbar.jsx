import { useState } from "react";
import "./SideNavbar.css";
import { SidebarData } from "./SidebarData";

const SideNavbar = () => {
  //usestate hook to manage the arrow direction
  const [isOpen, setIsOpen] = useState(true);

  //function to toggle sidebar arrow
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`sidebar ${isOpen ? "open" : "close"}`}>
      {/* ternery operator close is managed via css */}
      <div className="sidebar-header">
        <button className="toggle-btn" onClick={toggleSidebar}>
          {/* Ternery operator to show left or right arrow based on condition */}
          <div className={`arrow ${isOpen ? "left" : "right"}`}></div>
        </button>
        <div className="logo">
          {/* Ternery operator to show my app only when sidebar is on otherwise sidebar is off */}
          <h2> {isOpen ? "My-App" : ""}</h2>
        </div>
      </div>
      <nav className="nav-menu">
        <ul>
          {SidebarData?.map((item, index) => (
            <li key={index}>
              <a href={item.path}>
                {item.icon}
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideNavbar;
