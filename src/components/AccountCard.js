export default function AccountCard(props) {
  console.log(props.repo);
  return (
    <article className="flex account-card">
      <h2 className="text-xlg">#{props.index + 1}</h2>
      <div className="image-container">
        <img src={props.repo.owner.avatar_url} alt="avatar_image" className="repo_card_image" />
      </div>
      <h3 className="text-lg text-bold">{props.repo.owner.login}</h3>
      <div>
        <span>
          <i className="fas fa-user"></i>
        </span>
        <span>{props.repo.name}</span>
      </div>
      <div>
        <span>
          <i className="fas fa-star"></i>
        </span>
        <span>{props.repo.stargazers_count}</span>
      </div>
      <div>
        <span>
          <i className="fas fa-stethoscope"></i>
        </span>
        <span>{props.repo.forks}</span>
      </div>
      <div>
        <span>
          <i className="fas fa-window-close"></i>
        </span>
        <span>{props.repo.open_issues}</span>
      </div>
    </article>
  );
}