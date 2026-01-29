import { Link } from "react-router-dom";
import "./scss/user-details.scss";

import UserSummary from "@/components/pages/users/UserSummary";
import UserTabs from "@/components/pages/users/UserTabs";

function UserDetails() {
  return (
    <div className="user-details">
      <Link to="/users" className="user-details__back">
        ← Back to Users
      </Link>

      <div className="user-details__header">
        <h1>User Details</h1>

        <div className="user-details__actions">
          <button className="btn btn--danger">Blacklist User</button>
          <button className="btn btn--primary">Activate User</button>
        </div>
      </div>

      <UserSummary />
      <UserTabs />
    </div>
  );
}

export default UserDetails;
