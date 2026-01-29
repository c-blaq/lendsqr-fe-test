import type { UserT } from "@/types/user";
import "./scss/user-summary.scss";

type Props = {
  user: UserT | null;
};

function UserSummary({ user }: Props) {
  return (
    <section className="user-summary">
      <div className="user-summary__profile">
        <div className="user-summary__avatar">
          {user?.firstName.charAt(0)}
          {user?.lastName.charAt(0)}
        </div>

        <div>
          <h2>
            {user?.firstName} {user?.lastName}
          </h2>
          <span>LSQFf587g90</span>
        </div>
      </div>

      <div className="user-summary__tier">
        <span>User’s Tier</span>
        <div>★ ★ ☆</div>
      </div>

      <div className="user-summary__balance">
        <h3>₦200,000.00</h3>
        <span>9912345678/Providus Bank</span>
      </div>
    </section>
  );
}

export default UserSummary;
