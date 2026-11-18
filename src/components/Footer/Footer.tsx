import { profile } from '../../data/portfolioData';

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 {profile.nombre} — hecho con React y TypeScript.</p>
    </footer>
  );
}