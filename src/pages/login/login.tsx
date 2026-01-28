import { Link } from "react-router-dom";
import "./login.scss";

function Login() {
  return (
    <div className="login-form">
      <h1>Welcome!</h1>
      <p>Enter details to login.</p>

      <form>
        <input type="email" placeholder="Email" />

        <div className="login-form__password">
          <input type="password" placeholder="Password" />
          <button type="button">SHOW</button>
        </div>

        <Link to="#" className="login-form__forgot">
          Forgot Password?
        </Link>

        <button type="submit" className="login-form__submit">
          LOG IN
        </button>
      </form>
    </div>
  );
}

export default Login;
