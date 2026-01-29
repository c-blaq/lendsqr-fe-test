import UsersStats from "@/components/pages/users/UsersStats";
import "./scss/users.scss";

function Users() {
  return (
    <section className="users">
      <h1 className="users__title">Users</h1>

      <section className="users__stats">
        <UsersStats />
      </section>

      <section className="users__table">table here</section>

      <section className="users__pagination">pagination here</section>
    </section>
  );
}

export default Users;
