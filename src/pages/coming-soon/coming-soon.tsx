import { Link } from "react-router-dom";
import "./coming-soon.scss";

function ComingSoon() {
  return (
    <div className="coming-soon">
      <h1>Coming Soon!</h1>
      <p>This feature is currently under development.</p>
      <Link to="/dashboard" className="coming-soon__link">
        Go back to Dashboard
      </Link>
    </div>
  );
}

export default ComingSoon;
