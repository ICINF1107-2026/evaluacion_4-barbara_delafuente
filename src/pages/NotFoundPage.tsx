import { Link } from 'react-router-dom';
import './Pages.css';

export default function NotFoundPage() {
  return (
    <main className="page">
      <h1 className="page__title">404 — Página no encontrada</h1>
      <p>La ruta que buscas no existe.</p>
      <Link to="/" className="button">Volver al inicio</Link>
    </main>
  );
}
