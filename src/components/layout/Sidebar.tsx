import { NavLink, useLocation } from "react-router-dom";
import { SIDEBAR_SECTIONS } from "@/constants/sidebar";
import BriefcaseIcon from "@/assets/icons/BriefcaseIcon";

import "./scss/sidebar.scss";
import ChevronDownIcon from "@/assets/icons/ChevronDown";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

function Sidebar({ isOpen, onClose }: Props) {
  const location = useLocation();

  return (
    <>
      {isOpen && (
        <div className="sidebar-overlay" onClick={onClose} aria-hidden />
      )}
      <aside className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
        <a href="#" className="docs-link sidebar-link ">
          Documentation <span>&#10095;</span>
        </a>
        <button className="switch-organization">
          <div className="switch-organization__title">
            <BriefcaseIcon />
            <h3>Switch Organization</h3>
          </div>
          <div className="switch-organization__icon">
            <ChevronDownIcon />
          </div>
        </button>
        {SIDEBAR_SECTIONS.map((section, index) => (
          <div key={index} className="sidebar-section">
            {section.title && (
              <h3 className="sidebar-section__title">{section.title}</h3>
            )}

            <nav>
              {section.items.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  onClick={onClose}
                  className={() => {
                    const isComingSoon = item.path === "/coming-soon";
                    const isActive =
                      !isComingSoon && location.pathname === item.path;

                    return isActive
                      ? "sidebar-link sidebar-link--active"
                      : "sidebar-link";
                  }}
                >
                  <div className="sidebar-link__icon">{item.icon}</div>
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </nav>
          </div>
        ))}
      </aside>
    </>
  );
}

export default Sidebar;
