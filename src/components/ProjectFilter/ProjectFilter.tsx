import type { ProjectFilterProps } from '../../types';
import './ProjectFilter.css';

export default function ProjectFilter({ options, selected, onChange }: ProjectFilterProps) {
  return (
    <div className="project-filter" role="group" aria-label="Filtrar proyectos por tecnología">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className={
            option === selected
              ? 'project-filter__button project-filter__button--active'
              : 'project-filter__button'
          }
          aria-pressed={option === selected}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
