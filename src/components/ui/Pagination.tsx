import "./scss/pagination.scss";

function Pagination() {
  return (
    <div className="pagination">
      <div className="pagination__info">
        Showing
        <select>
          <option>10</option>
          <option>20</option>
          <option>50</option>
        </select>
        out of 100
      </div>

      <div className="pagination__controls">
        <button disabled>‹</button>
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <span>…</span>
        <button>10</button>
        <button>›</button>
      </div>
    </div>
  );
}

export default Pagination;
