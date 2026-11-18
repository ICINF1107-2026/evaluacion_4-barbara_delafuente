import type { ProjectCardProps } from '../../types';
import './ProjectCard.css';

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      {project.imagen && (
        <img className="project-card__image" src={project.imagen} alt={project.imagenAlt ?? ''} />
      )}
      <div className="project-card__body">
        <h3 className="project-card__title">{project.titulo}</h3>
        <p className="project-card__description">{project.descripcion}</p>
        <ul className="project-card__badges">
          {project.tecnologias.map((tech) => (
            <li key={tech} className="project-card__badge">{tech}</li>
          ))}
        </ul>
        <p className="project-card__links">
          <a href={project.urlRepo} target="_blank" rel="noopener noreferrer">Ver en GitHub</a>
          {project.urlSitio && (
            <a href={project.urlSitio} target="_blank" rel="noopener noreferrer">Ver sitio en vivo</a>
          )}
        </p>
      </div>
    </article>
  );
}
