import { Link } from "react-router-dom";
import "./scss/user-details.scss";

// import UserSummary from "@/components/pages/users/UserSummary";
import UserTabs from "@/components/pages/users/UserTabs";
import { useEffect, useState } from "react";
import type { UserT } from "@/types/user";

function UserDetails() {
  const [user, setUser] = useState<UserT | null>(null);

  const getUserDetailFromLocalStorage = () => {
    const storedUser = localStorage.getItem("selectedUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  };

  useEffect(() => getUserDetailFromLocalStorage, []);

  return (
    <div className="user-details">
      <Link to="/users" className="user-details__back">
        ← Back to Users
      </Link>

      {user ? (
        <div className="user-details__header">
          <h1>User Details</h1>

          <div className="user-details__actions">
            <button className="btn btn--danger">Blacklist User</button>
            <button className="btn btn--primary">Activate User</button>
          </div>
        </div>
      ) : (
        <p>No data found</p>
      )}

      <UserTabs user={user} />
    </div>
  );
}

export default UserDetails;
