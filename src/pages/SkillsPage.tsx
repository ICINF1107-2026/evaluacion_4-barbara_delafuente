import { skills } from '../data/portfolioData';
import './Pages.css';

export default function SkillsPage() {
  return (
    <main className="page">
      <h1 className="page__title">Habilidades</h1>
      <ul className="skills-list">
        {skills.map((skill) => (
          <li key={skill} className="skills-list__item">{skill}</li>
        ))}
      </ul>
    </main>
  );
}
