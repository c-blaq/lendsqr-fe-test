import { Avatar } from "radix-ui";

import logo from "@/assets/img/svg/logo.svg";
import chevronDownIcon from "@/assets/img/svg/icons/chevron-down.svg";
import bellIcon from "@/assets/img/svg/icons/bell.svg";
import searchIcon from "@/assets/img/svg/icons/search.svg";
import avatar from "@/assets/img/png/avatar.png";
import "./scss/header.scss";

type Props = {
  onMenuClick: () => void;
};

function Header({ onMenuClick }: Props) {
  return (
    <header className="header">
      <button
        className="header__menu"
        aria-label="Open menu"
        onClick={onMenuClick}
      >
        ☰
      </button>

      <div className="header__left">
        <img src={logo} alt="Lendsqr logo" className="header__logo" />
      </div>

      <div className="header__search">
        <input type="text" placeholder="Search for anything" />

        <button aria-label="search" className="header__search-btn">
          <img src={searchIcon} alt="search icon" />
        </button>
      </div>

      <div className="header__right">
        <a href="#" className="header__docs">
          Docs
        </a>

        <button aria-label="notification" className="header__notification">
          <img src={bellIcon} alt="bell icon" width={26} height={26} />
        </button>

        <div className="header__user">
          <Avatar.Root className="header__avatar">
            <Avatar.Image className="AvatarImage" src={avatar} alt="" />
            <Avatar.Fallback className="AvatarFallback" delayMs={600}>
              A
            </Avatar.Fallback>
          </Avatar.Root>
          <span className="header__name">Adedeji</span>
          <img
            src={chevronDownIcon}
            alt="arrow down"
            className="header__chevron"
            width={12}
            height={12}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
