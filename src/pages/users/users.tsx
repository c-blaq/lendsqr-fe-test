import "./scss/users.scss";
import UsersStats from "@/components/pages/users/UsersStats";
import UsersTable from "@/components/pages/users/UsersTable";
import Pagination from "@/components/ui/Pagination";
import { useEffect, useState } from "react";
import { getAllUsers } from "@/api/user";
import type { UserT } from "@/types/user";

function Users() {
  const [users, setUsers] = useState<UserT[]>([]);
  const [loading, setLoading] = useState(true);

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
        <UsersTable users={users} />
      </section>

      <section className="users__pagination">
        <Pagination />
      </section>
    </section>
  );
}

export default Users;
