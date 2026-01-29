import * as Tabs from "@radix-ui/react-tabs";

import "./scss/user-tabs.scss";
import UserGeneralDetails from "./UserGeneralDetails";
import type { UserT } from "@/types/user";
import { formatAmount } from "@/utils/formatters";

type Props = {
  user: UserT | null;
};

const tabs = [
  { value: "general", label: "General Details" },
  { value: "documents", label: "Documents" },
  { value: "bank", label: "Bank Details" },
  { value: "loans", label: "Loans" },
  { value: "savings", label: "Savings" },
  { value: "system", label: "App and System" },
];

function UserTabs({ user }: Props) {
  return (
    <>
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
          <h3>{formatAmount(user?.account.balance)}</h3>
          <span>
            {user?.account.accountNumber}/{user?.account.bank} Bank
          </span>
        </div>
      </section>

      <Tabs.Root className="user-tabs" defaultValue="general">
        <Tabs.List className="user-tabs__list">
          {tabs.map((tab) => (
            <Tabs.Trigger
              key={tab.value}
              value={tab.value}
              className="user-tabs__trigger"
              disabled={tab.value !== "general"}
            >
              {tab.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        <div className="empty-cont"></div>
        <Tabs.Content value="general" className="user-tabs__content">
          <UserGeneralDetails user={user} />
        </Tabs.Content>
      </Tabs.Root>
    </>
  );
}

export default UserTabs;
