import "./scss/card-skeleton.scss";

function CardSkeleton() {
  return (
    <div className="card-skeleton skeleton">
      <div className="card-skeleton__icon" />
      <div className="card-skeleton__label" />
      <div className="card-skeleton__value" />
    </div>
  );
}

export default CardSkeleton;
