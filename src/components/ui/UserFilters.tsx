import { Popover } from "radix-ui";
import "./scss/user-filters.scss";

function UsersFilter() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="users-filter__trigger">
          <img src="/icons/filter.svg" alt="Filter" />
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          className="users-filter"
          side="left"
          align="start"
          sideOffset={5}
          avoidCollisions
          collisionPadding={16}
        >
          <form>
            <div>
              <label htmlFor="org">Organization</label>
              <div className="filter-field">
                <select id="org">
                  <option value="">Select</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="pending">Pending</option>
                  <option value="blacklisted">Blacklisted</option>
                </select>
                <span className="filter-field__icon">▼</span>
              </div>
            </div>

            <div>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>

            <div>
              <label htmlFor="date">Date</label>
              <div className="filter-field">
                <input type="date" id="date" />
                <span className="filter-field__icon">📅</span>
              </div>
            </div>

            <div>
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" inputMode="numeric" />
            </div>

            <div>
              <label htmlFor="status">Status</label>
              <div className="filter-field">
                <select id="status">
                  <option value="">Select</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="pending">Pending</option>
                  <option value="blacklisted">Blacklisted</option>
                </select>
                <span className="filter-field__icon">▼</span>
              </div>
            </div>
            <div className="users-filter__actions">
              <button type="button" className="btn btn--outline">
                Reset
              </button>
              <button type="submit" className="btn btn--primary">
                Filter
              </button>
            </div>
          </form>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export default UsersFilter;
