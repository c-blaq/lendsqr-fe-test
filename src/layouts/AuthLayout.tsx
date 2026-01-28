import { Outlet } from "react-router-dom";
import logo from "@/assets/img/svg/logo.svg";
import illustration from "@/assets/img/png/sign-in-illustration.png";
import "./scss/auth.scss";

export function AuthLayout() {
  return (
    <div className="auth">
      <div className="auth-visual">
        <div>
          <img src={logo} alt="Lendsqr logo" className="auth-visual__logo" />

          <img
            src={illustration}
            alt="Authentication illustration"
            className="auth-visual__image"
          />
        </div>
      </div>

      <div className="auth-content">
        <Outlet />
      </div>
    </div>
  );
}
