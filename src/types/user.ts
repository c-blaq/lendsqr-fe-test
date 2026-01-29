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
    income: string;
    loanRepayment: string;
  };

  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };

  guarantor: {
    name: string;
    phone: number;
    relationship: string;
  };
};
