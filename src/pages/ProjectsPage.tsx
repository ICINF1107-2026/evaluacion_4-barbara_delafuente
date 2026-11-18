import { useState } from 'react';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import ProjectFilter from '../components/ProjectFilter/ProjectFilter';
import RepoCard from '../components/RepoCard/RepoCard';
import StatusMessage from '../components/StatusMessage/StatusMessage';
import useFetchApi from '../hooks/useFetchApi';
import { GITHUB_USER, projects } from '../data/portfolioData';
import type { GitHubRepo } from '../types';
import './Pages.css';

const API_URL = `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=6`;

export default function ProjectsPage() {
  const [selectedTech, setSelectedTech] = useState<string>('Todos');
  const { data: repos, loading, error } = useFetchApi<GitHubRepo[]>(API_URL);

  const techOptions = ['Todos', ...Array.from(new Set(projects.flatMap((p) => p.tecnologias)))];
  const visibleProjects =
    selectedTech === 'Todos' ? projects : projects.filter((p) => p.tecnologias.includes(selectedTech));

  return (
    <main className="page">
      <h1 className="page__title">Proyectos</h1>

      <h2>Proyectos propios</h2>
      <ProjectFilter options={techOptions} selected={selectedTech} onChange={setSelectedTech} />
      <section className="projects-grid" aria-label="Mis proyectos">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>

      <h2 className="page__subtitle">Repositorios en GitHub</h2>
      <p>Datos obtenidos en tiempo real desde la API REST de GitHub.</p>

      {loading && <StatusMessage type="loading" message="Cargando repositorios desde GitHub..." />}
      {error && <StatusMessage type="error" message={error} />}
      {!loading && !error && repos && (
        <section className="projects-grid" aria-label="Listado de repositorios">
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </section>
      )}
    </main>
  );
}
