/* eslint-disable react-hooks/set-state-in-effect */
import { Link, useParams } from "react-router-dom";
import "./scss/user-details.scss";

// import UserSummary from "@/components/pages/users/UserSummary";
import UserTabs from "@/components/pages/users/UserTabs";
import { useEffect, useState } from "react";
import type { UserT } from "@/types/user";
import BackArrowIcon from "@/assets/icons/ArrowBack";

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState<UserT | null>(null);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("selectedUser");
      if (!storedUser) return;

      const parsed: UserT = JSON.parse(storedUser);

      if (id && parsed.id !== id) {
        setUser(null);
        return;
      }

      setUser(parsed);
    } catch {
      setUser(null);
    }
  }, [id]);

  return (
    <div className="user-details">
      <Link to="/users" className="user-details__back">
        <BackArrowIcon />
        Back to Users
      </Link>

      {user ? (
        <>
          <div className="user-details__header">
            <h1>User Details</h1>

            <div className="user-details__actions">
              <button className="btn btn--danger">Blacklist User</button>
              <button className="btn btn--primary">Activate User</button>
            </div>
          </div>
          <UserTabs user={user} />
        </>
      ) : (
        <h2>No data found!</h2>
      )}
    </div>
  );
}

export default UserDetails;
