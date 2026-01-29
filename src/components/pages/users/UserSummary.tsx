import "./scss/user-summary.scss";

function UserSummary() {
  return (
    <section className="user-summary">
      <div className="user-summary__profile">
        <div className="user-summary__avatar">👤</div>

        <div>
          <h2>Grace Effiom</h2>
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
