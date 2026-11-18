import type { RepoCardProps } from '../../types';
import './RepoCard.css';

export default function RepoCard({ repo }: RepoCardProps) {
  return (
    <article className="repo-card">
      <h3 className="repo-card__title">{repo.name}</h3>
      <p className="repo-card__description">
        {repo.description ?? 'Sin descripción proporcionada en el repositorio.'}
      </p>
      <p className="repo-card__meta">
        <span>{repo.language ?? 'Sin lenguaje'}</span>
        <span>★ {repo.stargazers_count}</span>
      </p>
      <a className="repo-card__link" href={repo.html_url} target="_blank" rel="noopener noreferrer">
        Ver código fuente
      </a>
    </article>
  );
}
