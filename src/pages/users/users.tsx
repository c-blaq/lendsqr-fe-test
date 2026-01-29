import UsersStats from "@/components/pages/users/UsersStats";
import "./scss/users.scss";
import UsersTable from "@/components/pages/users/UsersTable";
import Pagination from "@/components/ui/Pagination";

function Users() {
  return (
    <section className="users">
      <h1 className="users__title">Users</h1>

      <section className="users__stats">
        <UsersStats />
      </section>

      <section className="users__table">
        <UsersTable />
      </section>

      <section className="users__pagination">
        <Pagination />
      </section>
    </section>
  );
}

export default Users;
