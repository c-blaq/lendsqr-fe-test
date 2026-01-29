import type { NavSection } from "@/types/navigation";

import HomeIcon from "@/assets/icons/HomeIcon";
import UserFriendsIcon from "@/assets/icons/UserFriends";
import UserAvatarIcon from "@/assets/icons/UserAvatar";
import HandshakeIcon from "@/assets/icons/Handshake";
import LoanIcon from "@/assets/icons/Loan";
import GalaxyIcon from "@/assets/icons/Galaxy";
import PiggyBankIcon from "@/assets/icons/PiggyBank";
import ScrollIcon from "@/assets/icons/Scroll";
import UserCheckedIcon from "@/assets/icons/UserChecked";
import UserCogIcon from "@/assets/icons/UserCog";
import UserTimesIcon from "@/assets/icons/UserTimes";
import BriefcaseIcon from "@/assets/icons/BriefcaseIcon";
import BankIcon from "@/assets/icons/Bank";
import MoneySackIcon from "@/assets/icons/MoneySack";
import CoinIcon from "@/assets/icons/Coin";
import TransactionIcon from "@/assets/icons/Transaction";
import SliderIcon from "@/assets/icons/Slider";
import ClipboardIcon from "@/assets/icons/Clipboard";
import ChartBarIcon from "@/assets/icons/ChartBar";
import BadgePercentIcon from "@/assets/icons/BadgePercent";

export const SIDEBAR_SECTIONS: NavSection[] = [
  {
    items: [
      {
        label: "Dashboard",
        path: "/dashboard",
        icon: <HomeIcon />,
      },
    ],
  },

  {
    title: "Customers",
    items: [
      {
        label: "Users",
        path: "/users",
        icon: <UserFriendsIcon />,
      },
      {
        label: "Guarantors",
        path: "/coming-soon",
        icon: <UserAvatarIcon />,
      },
      {
        label: "Loans",
        path: "/coming-soon",
        icon: <MoneySackIcon />,
      },
      {
        label: "Decision Models",
        path: "/coming-soon",
        icon: <HandshakeIcon />,
      },
      {
        label: "Savings",
        path: "/coming-soon",
        icon: <PiggyBankIcon />,
      },
      {
        label: "Loan Requests",
        path: "/coming-soon",
        icon: <LoanIcon />,
      },
      {
        label: "Whitelist",
        path: "/coming-soon",
        icon: <UserCheckedIcon />,
      },
      {
        label: "Karma",
        path: "/coming-soon",
        icon: <UserTimesIcon />,
      },
    ],
  },

  {
    title: "Businesses",
    items: [
      {
        label: "Organization",
        path: "/coming-soon",
        icon: <BriefcaseIcon />,
      },
      {
        label: "Loan Products",
        path: "/coming-soon",
        icon: <LoanIcon />,
      },
      {
        label: "Savings Products",
        path: "/coming-soon",
        icon: <BankIcon />,
      },
      {
        label: "Fees and Charges",
        path: "/coming-soon",
        icon: <CoinIcon />,
      },
      {
        label: "Transactions",
        path: "/coming-soon",
        icon: <TransactionIcon />,
      },
      {
        label: "Services",
        path: "/coming-soon",
        icon: <GalaxyIcon />,
      },
      {
        label: "Service Account",
        path: "/coming-soon",
        icon: <UserCogIcon />,
      },
      {
        label: "Settlements",
        path: "/coming-soon",
        icon: <ScrollIcon />,
      },
      {
        label: "Reports",
        path: "/coming-soon",
        icon: <ChartBarIcon />,
      },
    ],
  },

  {
    title: "Settings",
    items: [
      {
        label: "Preferences",
        path: "/coming-soon",
        icon: <SliderIcon />,
      },
      {
        label: "Fees and Pricing",
        path: "/coming-soon",
        icon: <BadgePercentIcon />,
      },
      {
        label: "Audit Logs",
        path: "/coming-soon",
        icon: <ClipboardIcon />,
      },
    ],
  },
];
