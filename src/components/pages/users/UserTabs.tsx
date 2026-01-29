import * as Tabs from "@radix-ui/react-tabs";

import "./scss/user-tabs.scss";
import UserGeneralDetails from "./UserGeneralDetails";

const tabs = [
  { value: "general", label: "General Details" },
  { value: "documents", label: "Documents" },
  { value: "bank", label: "Bank Details" },
  { value: "loans", label: "Loans" },
  { value: "savings", label: "Savings" },
  { value: "system", label: "App and System" },
];

function UserTabs() {
  return (
    <>
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
          <UserGeneralDetails />
        </Tabs.Content>
      </Tabs.Root>
    </>
  );
}

export default UserTabs;
