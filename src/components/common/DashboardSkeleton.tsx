import CardSkeleton from "@/components/common/CardSkeleton";
import TableSkeleton from "@/components/common/TableSkeleton";
import "./scss/dashboard-skeleton.scss";

function DashboardSkeleton() {
  return (
    <div className="dashboard-skeleton">
      <div className="dashboard-skeleton__stats">
        {Array.from({ length: 4 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>

      <div className="dashboard-skeleton__table">
        <TableSkeleton />
      </div>
    </div>
  );
}

export default DashboardSkeleton;
