import AccountCard from "./AccountCard";

export default function RepoGrid(props) {
  if (props.loading || props.data === null) {
    return (
      <section className="repo-grid loader">
        <div className="flex container lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h3 className="text-lg text-bold">Fetching Repos</h3>
      </section>
    );
  }
  return (
    <section className="repo-grid">
      <div className="flex container">
        {props.data.map((repo, index) => (
          <AccountCard repo={repo} index={index} />
        ))}
      </div>
    </section>
  );
}
