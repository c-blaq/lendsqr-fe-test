import UserActionsMenu from "@/components/ui/UserActionsMenu";
import "./scss/users-table.scss";

type UserStatus = "active" | "inactive" | "pending" | "blacklisted";

type User = {
  id: string;
  org: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: UserStatus;
};

const USERS: User[] = [
  {
    id: "1",
    org: "Lendsqr",
    username: "adedeji",
    email: "adedeji@mail.com",
    phone: "08012345678",
    dateJoined: "May 15, 2020 10:00 AM",
    status: "active",
  },
  {
    id: "2",
    org: "Irorun",
    username: "john_d",
    email: "john@mail.com",
    phone: "08098765432",
    dateJoined: "Apr 20, 2020 9:30 AM",
    status: "inactive",
  },
  {
    id: "3",
    org: "Lendsqr",
    username: "mary_ann",
    email: "mary@mail.com",
    phone: "08055556666",
    dateJoined: "Jun 10, 2020 1:15 PM",
    status: "pending",
  },
  {
    id: "4",
    org: "Lendsqr",
    username: "blacklist_me",
    email: "blocked@mail.com",
    phone: "08044443333",
    dateJoined: "Feb 2, 2020 4:00 PM",
    status: "blacklisted",
  },
];

const headers = [
  "Organization",
  "Username",
  "Email",
  "Phone Number",
  "Date Joined",
  "Status",
];

function UsersTable() {
  return (
    <div className="users-table">
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>
                <div>
                  <span>{header}</span>
                  <button className="users-table__filter">
                    <img src="/icons/filter.svg" width={16} height={16} />
                  </button>
                </div>
              </th>
            ))}
            <th />
          </tr>
        </thead>

        <tbody>
          {USERS.map((user) => (
            <tr key={user.id}>
              <td>{user.org}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.dateJoined}</td>
              <td>
                <span className={`status status--${user.status}`}>
                  {user.status}
                </span>
              </td>
              <td className="users-table__actions">
                <UserActionsMenu userId={user.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;
