import { Popover } from "radix-ui";
import "./scss/user-filters.scss";
import type { UserFiltersT, UserT } from "@/types/user";
import { useEffect, useRef, useState } from "react";
import ChevronDownIcon from "@/assets/icons/ChevronDown";
import CalendarIcon from "@/assets/icons/Calender";

type Props = {
  users: UserT[];
  filters: UserFiltersT;
  onApply: (filters: UserFiltersT) => void;
};

function UsersFilter({ users, filters, onApply }: Props) {
  const [open, setOpen] = useState(false);
  const [draftFilters, setDraftFilters] = useState<UserFiltersT>(filters);
  const dateRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setDraftFilters(filters);
  }, [filters]);

  const resetFilters = () => {
    const empty: UserFiltersT = {
      org: "",
      username: "",
      email: "",
      phone: "",
      status: "",
      date: "",
    };

    setDraftFilters(empty);
    onApply(empty);
    setOpen(false);
  };

  const applyFilters = () => {
    onApply(draftFilters);
    setOpen(false);
  };

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button className="users-filter__trigger">
          <img src="/icons/filter.svg" alt="Filter" />
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          className="users-filter"
          side="bottom"
          align="center"
          avoidCollisions
          alignOffset={20}
          collisionPadding={16}
        >
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="org">Organization</label>
              <div className="filter-field">
                <select
                  id="org"
                  value={draftFilters.org}
                  onChange={(e) =>
                    setDraftFilters({
                      ...draftFilters,
                      org: e.target.value,
                    })
                  }
                >
                  {users
                    .map((u) => u.org)
                    .filter((org, index, arr) => arr.indexOf(org) === index)
                    .map((org) => (
                      <option key={org} value={org}>
                        {org}
                      </option>
                    ))}
                </select>
                <span className="filter-field__icon">
                  <ChevronDownIcon />
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={draftFilters.username}
                onChange={(e) =>
                  setDraftFilters({
                    ...draftFilters,
                    username: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={draftFilters.email}
                onChange={(e) =>
                  setDraftFilters({
                    ...draftFilters,
                    email: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <label htmlFor="date">Date</label>
              <div className="filter-field">
                <input
                  ref={dateRef}
                  type="date"
                  id="date"
                  value={draftFilters.date}
                  onChange={(e) =>
                    setDraftFilters({
                      ...draftFilters,
                      date: e.target.value,
                    })
                  }
                />
                <button
                  onClick={() => dateRef.current?.showPicker()}
                  className="filter-field__icon"
                >
                  <CalendarIcon />
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                inputMode="numeric"
                value={draftFilters.phone}
                onChange={(e) =>
                  setDraftFilters({
                    ...draftFilters,
                    phone: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <label htmlFor="status">Status</label>
              <div className="filter-field">
                <select
                  id="status"
                  value={draftFilters.status}
                  onChange={(e) =>
                    setDraftFilters({
                      ...draftFilters,
                      status: e.target.value,
                    })
                  }
                >
                  {users
                    .map((u) => u.status)
                    .filter(
                      (status, index, arr) => arr.indexOf(status) === index
                    )
                    .map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                </select>
                <span className="filter-field__icon">
                  <ChevronDownIcon />
                </span>
              </div>
            </div>
            <div className="users-filter__actions">
              <button
                type="button"
                className="btn btn--outline"
                onClick={resetFilters}
              >
                Reset
              </button>
              <button
                type="submit"
                className="btn btn--primary"
                onClick={applyFilters}
              >
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
