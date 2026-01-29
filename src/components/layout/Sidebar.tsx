import { NavLink } from "react-router-dom";
import "./scss/sidebar.scss";

type NavItem = {
  label: string;
  path: string;
  icon?: React.ReactNode; // placeholder for now
};

type NavSection = {
  title?: string;
  items: NavItem[];
};

const sidebarSections: NavSection[] = [
  {
    items: [
      { label: "Switch Organization", path: "" },
      { label: "Dashboard", path: "/dashboard" },
    ],
  },
  {
    title: "Customers",
    items: [
      { label: "Users", path: "/users" },
      { label: "Guarantors", path: "" },
      { label: "Loans", path: "" },
      { label: "Decision Models", path: "" },
      { label: "Savings", path: "" },
      { label: "Loan Requests", path: "" },
      { label: "Whitelist", path: "" },
      { label: "Karma", path: "" },
    ],
  },
  {
    title: "Businesses",
    items: [
      { label: "Organization", path: "" },
      { label: "Loan Products", path: "" },
      { label: "Savings Products", path: "" },
      { label: "Fees and Charges", path: "" },
      { label: "Transactions", path: "" },
      { label: "Services", path: "" },
      { label: "Service Account", path: "" },
      { label: "Settlements", path: "" },
      { label: "Reports", path: "" },
    ],
  },
  {
    title: "Settings",
    items: [
      { label: "Preferences", path: "" },
      { label: "Fees and Pricing", path: "" },
      { label: "Audit Logs", path: "" },
    ],
  },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      {sidebarSections.map((section, index) => (
        <div key={index} className="sidebar-section">
          {section.title && (
            <h3 className="sidebar-section__title">{section.title}</h3>
          )}

          <nav>
            {section.items.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "sidebar-link sidebar-link--active"
                    : "sidebar-link"
                }
              >
                <span className="sidebar__icon">⬤</span>
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      ))}
    </aside>
  );
}

export default Sidebar;
