import type { UserT } from "@/types/user";
import "./scss/user-detail.scss";
import { formatAmount } from "@/utils/formatters";

type Props = {
  user: UserT | null;
};

function DetailItem({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="detail-item">
      <span>{label}</span>
      <p>{value}</p>
    </div>
  );
}

function UserGeneralDetails({ user }: Props) {
  return (
    user && (
      <div className="user-info">
        <section>
          <h3>Personal Information</h3>
          <div className="user-info__grid">
            <DetailItem
              label="Full Name"
              value={`${user?.firstName} ${user?.lastName}`}
            />
            <DetailItem label="Phone Number" value={user?.phone} />
            <DetailItem label="Email Address" value="grace@gmail.com" />
            <DetailItem label="BVN" value={user?.profile.bvn} />
            <DetailItem label="Gender" value={user?.profile.gender} />
            <DetailItem
              label="Marital Status"
              value={user?.profile.maritalStatus}
            />
            <DetailItem label="Children" value={user?.profile.children} />
            <DetailItem
              label="Type of Residence"
              value={user?.profile.residence}
            />
          </div>
        </section>

        <section>
          <h3>Education and Employment</h3>
          <div className="user-info__grid">
            <DetailItem
              label="Level of Education"
              value={user?.education.level}
            />
            <DetailItem
              label="Employment Status"
              value={user?.education.employmentStatus}
            />
            <DetailItem
              label="Sector of Employment"
              value={user?.education.sector}
            />
            <DetailItem
              label="Duration of Employment"
              value={user?.education.duration}
            />
            <DetailItem
              label="Office Email"
              value={user?.education.officeEmail}
            />
            <DetailItem
              label="Monthly Income"
              value={
                formatAmount(user?.education.incomeMin) +
                "-" +
                formatAmount(user.education.incomeMax)
              }
            />
            <DetailItem
              label="Loan Repayment"
              value={`${formatAmount(user?.education.loloanRepayment)}`}
            />
          </div>
        </section>

        <section>
          <h3>Socials</h3>
          <div className="user-info__grid">
            <DetailItem label="Twitter" value={user?.socials.twitter} />
            <DetailItem label="Facebook" value={user?.socials.facebook} />
            <DetailItem label="Instagram" value={user?.socials.instagram} />
          </div>
        </section>

        <section>
          <h3>Guarantor</h3>
          <div className="user-info__grid">
            <DetailItem label="Full Name" value={user?.guarantor.fullName} />
            <DetailItem label="Phone Number" value={user?.guarantor.phone} />
            <DetailItem
              label="Email Address"
              value={`${user?.guarantor.fullName
                .replace(" ", ".")
                .toLowerCase()}@gmail.com`}
            />
            <DetailItem
              label="Relationship"
              value={user?.guarantor.relationship}
            />
          </div>
        </section>
      </div>
    )
  );
}

export default UserGeneralDetails;
