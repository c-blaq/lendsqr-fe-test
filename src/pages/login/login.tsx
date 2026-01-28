import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.scss";

type Errors = {
  email?: string;
  password?: string;
};

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validate = (): boolean => {
    const newErrors: Errors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
      // not the standard check BTW
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      localStorage.setItem("isAuthenticated", "true");
      setIsSubmitting(false);
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="login-form">
      <h1>Welcome!</h1>
      <p>Enter details to login.</p>

      <form onSubmit={handleSubmit} noValidate>
        <div className="login-form__field">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors((prev) => ({ ...prev, email: undefined }));
            }}
          />
          {errors.email && (
            <span className="login-form__error">{errors.email}</span>
          )}
        </div>

        <div className="login-form__field login-form__password">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors((prev) => ({ ...prev, password: undefined }));
            }}
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? "HIDE" : "SHOW"}
          </button>
          {errors.password && (
            <span className="login-form__error">{errors.password}</span>
          )}
        </div>

        <Link to="#" className="login-form__forgot">
          Forgot Password?
        </Link>

        <button
          type="submit"
          className="login-form__submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "LOGGING IN..." : "LOG IN"}
        </button>
      </form>
    </div>
  );
}

export default Login;
