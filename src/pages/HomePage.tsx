import { Link } from 'react-router-dom';
import { profile } from '../data/portfolioData';
import './Pages.css';

export default function HomePage() {
  return (
    <main className="hero">
      <h1 className="hero__title">{profile.nombre}</h1>
      <p className="hero__subtitle">{profile.resumen}</p>
      <Link to="/proyectos" className="button">Ver mis proyectos</Link>
    </main>
  );
}
