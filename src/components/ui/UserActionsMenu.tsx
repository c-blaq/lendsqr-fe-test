import { DropdownMenu } from "radix-ui";
import { useNavigate } from "react-router-dom";

import "./scss/user-actions-menu.scss";

type Props = {
  userId: string;
};

function UserActionsMenu({ userId }: Props) {
  const navigate = useNavigate();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="users-table__actions-trigger"
          aria-label="User actions"
        >
          ⋮
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="actions-menu"
          sideOffset={8}
          align="end"
        >
          <DropdownMenu.Item
            className="actions-menu__item"
            onSelect={() => navigate(`/users/${userId}`)}
          >
            <img src="/icons/eye.svg" />
            View Details
          </DropdownMenu.Item>

          <DropdownMenu.Item className="actions-menu__item">
            <img src="/icons/avatar-cancel.svg" /> Blacklist User
          </DropdownMenu.Item>

          <DropdownMenu.Item className="actions-menu__item">
            <img src="/icons/avatar-check.svg" />
            Activate User
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default UserActionsMenu;
