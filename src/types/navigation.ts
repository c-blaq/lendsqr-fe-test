export type NavItem = {
  label: string;
  path: string;
  icon?: React.ReactNode;
};

export type NavSection = {
  title?: string;
  items: NavItem[];
};
