import UsersStats from "@/components/pages/users/UsersStats";
import UsersTable from "@/components/pages/users/UsersTable";
import { useEffect, useState } from "react";
import { getAllUsers } from "@/api/user";
import type { UserFiltersT, UserT } from "@/types/user";

import "@/pages/users/scss/users.scss";
import DashboardSkeleton from "@/components/common/DashboardSkeleton";

function Users() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<UserT[]>([]);

  const [filters, setFilters] = useState<UserFiltersT>({
    org: "",
    username: "",
    email: "",
    phone: "",
    status: "",
    date: "",
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getAllUsers();
        setUsers(users);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <DashboardSkeleton />;

  return (
    <section className="users">
      <h1 className="users__title">Dashboard</h1>

      <section className="users__stats">
        <UsersStats users={users} />
      </section>

      <section className="users__table">
        <UsersTable
          filteredUsers={users.slice(0, 5)}
          allUsers={users}
          filters={filters}
          onFilterApply={setFilters}
        />
      </section>
    </section>
  );
}

export default Users;
