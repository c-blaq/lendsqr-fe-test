import "./scss/user-detail.scss";

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="detail-item">
      <span>{label}</span>
      <p>{value}</p>
    </div>
  );
}

function UserGeneralDetails() {
  return (
    <div className="user-info">
      <section>
        <h3>Personal Information</h3>
        <div className="user-info__grid">
          <DetailItem label="Full Name" value="Grace Effiom" />
          <DetailItem label="Phone Number" value="07060870922" />
          <DetailItem label="Email Address" value="grace@gmail.com" />
          <DetailItem label="BVN" value="07060870922" />
          <DetailItem label="Gender" value="Female" />
          <DetailItem label="Marital Status" value="Single" />
          <DetailItem label="Children" value="None" />
          <DetailItem label="Type of Residence" value="Parent’s Apartment" />
        </div>
      </section>

      <section>
        <h3>Education and Employment</h3>
        <div className="user-info__grid">
          <DetailItem label="Level of Education" value="B.Sc" />
          <DetailItem label="Employment Status" value="Employed" />
          <DetailItem label="Sector of Employment" value="FinTech" />
          <DetailItem label="Duration of Employment" value="2 years" />
          <DetailItem label="Office Email" value="grace@company.com" />
          <DetailItem
            label="Monthly Income"
            value="₦200,000.00 - ₦400,000.00"
          />
          <DetailItem label="Loan Repayment" value="₦40,000" />
        </div>
      </section>

      <section>
        <h3>Socials</h3>
        <div className="user-info__grid">
          <DetailItem label="Twitter" value="@grace_effiom" />
          <DetailItem label="Facebook" value="Grace Effiom" />
          <DetailItem label="Instagram" value="@grace_effiom" />
        </div>
      </section>

      <section>
        <h3>Guarantor</h3>
        <div className="user-info__grid">
          <DetailItem label="Full Name" value="Grace Effiom" />
          <DetailItem label="Phone Number" value="08012345678" />
          <DetailItem label="Email Address" value="grace@gmail.com" />
          <DetailItem label="Relationship" value="Sister" />
        </div>
      </section>
    </div>
  );
}

export default UserGeneralDetails;
