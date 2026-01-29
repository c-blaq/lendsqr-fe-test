import "./scss/users-stats.scss";

type Stat = {
  label: string;
  value: string;
  icon: string;
  bgColor?: string;
};

const stats: Stat[] = [
  {
    label: "Users",
    value: "2,453",
    icon: "/icons/users-avatar.svg",
    bgColor: "rgba(223, 24, 255, 0.1)",
  },
  {
    label: "Active Users",
    value: "2,453",
    icon: "/icons/active-users-avatar.svg",
    bgColor: "rgba(87, 24, 255, 0.1)",
  },
  {
    label: "Users with Loans",
    value: "12,453",
    icon: "/icons/np-loan.svg",
    bgColor: "rgba(245, 95, 68, 0.1)",
  },
  {
    label: "Users with Savings",
    value: "102,453",
    icon: "/icons/np-money.svg",
    bgColor: "rgba(255, 51, 102, 0.1)",
  },
];

function UsersStats() {
  return (
    <div className="users-stats">
      {stats.map((stat) => (
        <div key={stat.label} className="users-stats__card">
          <div
            className="users-stats__icon"
            style={{
              backgroundColor: stat.bgColor || "rgba(181, 232, 232, 0.1)",
            }}
          >
            <img src={stat.icon} alt={stat.label} />
          </div>

          <span className="users-stats__label">{stat.label}</span>
          <strong className="users-stats__value">{stat.value}</strong>
        </div>
      ))}
    </div>
  );
}

export default UsersStats;
