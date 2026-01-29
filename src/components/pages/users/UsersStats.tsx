import type { UserT } from "@/types/user";
import "./scss/users-stats.scss";
import { useMemo } from "react";

type Stat = {
  label: string;
  value: string;
  icon: string;
  bgColor?: string;
};

type Props = {
  users: UserT[];
};

function UsersStats({ users = [] }: Props) {
  const { total, active, withLoans, withSavings } = useMemo(() => {
    return users.reduce(
      (acc, user) => {
        acc.total += 1;
        if (user.status === "active") acc.active += 1;
        if (user.hasLoan) acc.withLoans += 1;
        if (user.hasSavings) acc.withSavings += 1;
        return acc;
      },
      {
        total: 0,
        active: 0,
        withLoans: 0,
        withSavings: 0,
      }
    );
  }, [users]);

  const stats: Stat[] = [
    {
      label: "Users",
      value: total.toLocaleString(),
      icon: "/icons/users-avatar.svg",
      bgColor: "rgba(223, 24, 255, 0.1)",
    },
    {
      label: "Active Users",
      value: active.toLocaleString(),
      icon: "/icons/active-users-avatar.svg",
      bgColor: "rgba(87, 24, 255, 0.1)",
    },
    {
      label: "Users with Loans",
      value: withLoans.toLocaleString(),
      icon: "/icons/np-loan.svg",
      bgColor: "rgba(245, 95, 68, 0.1)",
    },
    {
      label: "Users with Savings",
      value: withSavings.toLocaleString(),
      icon: "/icons/np-money.svg",
      bgColor: "rgba(255, 51, 102, 0.1)",
    },
  ];

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
