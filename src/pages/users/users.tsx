import "./scss/users.scss";
import UsersStats from "@/components/pages/users/UsersStats";
import UsersTable from "@/components/pages/users/UsersTable";
import Pagination from "@/components/ui/Pagination";
import { useEffect, useMemo, useState } from "react";
import { getAllUsers } from "@/api/user";
import type { UserFiltersT, UserT } from "@/types/user";

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

  const filteredUsers = useMemo(() => {
    return users.filter((u) => {
      if (filters.org && u.org !== filters.org) return false;
      if (filters.username && !u.username.includes(filters.username))
        return false;
      if (filters.email && !u.email.includes(filters.email)) return false;
      if (filters.phone && !String(u.phone).includes(filters.phone))
        return false;
      if (filters.status && u.status !== filters.status) return false;
      if (filters.date && !u.dateJoined.includes(filters.date)) return false;
      return true;
    });
  }, [users, filters]);

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

  if (loading) return <p>Loading users…</p>;

  return (
    <section className="users">
      <h1 className="users__title">Users</h1>

      <section className="users__stats">
        <UsersStats users={users} />
      </section>

      <section className="users__table">
        <UsersTable
          filteredUsers={filteredUsers}
          allUsers={users}
          filters={filters}
          onFilterApply={setFilters}
        />
      </section>

      <section className="users__pagination">
        <Pagination />
      </section>
    </section>
  );
}

export default Users;
