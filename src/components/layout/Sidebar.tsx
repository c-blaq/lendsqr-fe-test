import { NavLink } from "react-router-dom";
// import logo from "@/assets/img/svg/logo.svg";
import "./scss/sidebar.scss";

function Sidebar() {
  return (
    <aside className="sidebar shadow-lg">
      {/* <div className="sidebar__header">
        <img src={logo} alt="Lendsqr logo" className="sidebar__logo" />
      </div> */}

      <nav className="sidebar__nav">
        <NavLink to="/dashboard" className="sidebar__link">
          Dashboard
        </NavLink>

        <NavLink to="/users" className="sidebar__link">
          Users
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
