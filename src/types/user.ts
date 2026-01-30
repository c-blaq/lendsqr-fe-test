export type UserStatusT = "active" | "inactive" | "pending" | "blacklisted";

export type UserT = {
  id: string;
  org: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: number;
  dateJoined: string;
  status: UserStatusT;
  hasLoan: boolean;
  hasSavings: boolean;

  account: {
    balance: number;
    accountNumber: number;
    bank: string;
    tier: number;
  };

  profile: {
    fullName: string;
    bvn: number;
    gender: "Male" | "Female";
    maritalStatus: "Single" | "Married" | "Divorced" | "Widowed";
    children: number;
    residence: string;
  };

  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    incomeMin: number;
    incomeMax: number;
    loloanRepayment: number;
  };

  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };

  guarantor: {
    fullName: string;
    phone: number;
    relationship: string;
  };
};

export type UserFiltersT = {
  org: string;
  username: string;
  email: string;
  phone: string;
  status: string;
  date: string;
};
