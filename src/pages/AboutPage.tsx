import { profile } from '../data/portfolioData';
import './Pages.css';

export default function AboutPage() {
  return (
    <main className="page">
      <h1 className="page__title">Sobre mí</h1>
      <p>{profile.sobreMi}</p>
    </main>
  );
}
