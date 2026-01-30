import "./scss/table-skeleton.scss";

type Props = {
  rows?: number;
};

function TableSkeleton({ rows = 10 }: Props) {
  return (
    <div className="table-skeleton">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="table-skeleton__row skeleton">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      ))}
    </div>
  );
}

export default TableSkeleton;
