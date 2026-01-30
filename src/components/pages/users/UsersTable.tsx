import UserActionsMenu from "@/components/ui/UserActionsMenu";
import "./scss/users-table.scss";
import UsersFilter from "@/components/ui/UserFilters";
import type { UserFiltersT, UserT } from "@/types/user";

type Props = {
  allUsers: UserT[];
  filteredUsers: UserT[];
  filters: UserFiltersT;
  onFilterApply: (filters: UserFiltersT) => void;
};

const headers = [
  "Organization",
  "Username",
  "Email",
  "Phone Number",
  "Date Joined",
  "Status",
];

function UsersTable({
  allUsers,
  filteredUsers,
  filters,
  onFilterApply,
}: Props) {
  return (
    <div className="users-table">
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>
                <div>
                  <span>{header}</span>
                  <UsersFilter
                    users={allUsers}
                    filters={filters}
                    onApply={onFilterApply}
                  />
                </div>
              </th>
            ))}
            <th />
          </tr>
        </thead>

        <tbody>
          {filteredUsers.map((user) => (
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
                <UserActionsMenu user={user} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;
