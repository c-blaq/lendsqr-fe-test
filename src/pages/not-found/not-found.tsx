import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";

import "./not-found.scss";

function NotFound() {
  const error = useRouteError();

  let title = "Oops!";
  let message = "Something went wrong.";

  if (isRouteErrorResponse(error) && error.status === 404) {
    title = "404";
    message = "Oops! The page you’re looking for doesn’t exist";
  }
  return (
    <div className="not-found">
      <h1>{title}</h1>
      <p>{message}</p>

      <Link to="/dashboard" className="not-found__link">
        Go back to Dashboard
      </Link>
    </div>
  );
}

export default NotFound;
