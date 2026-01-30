import "./scss/loader.scss";

function AppLoader() {
  return (
    <div className="page-loader">
      <div className="page-loader__spinner" />
      <p>Loading…</p>
    </div>
  );
}

export default AppLoader;
