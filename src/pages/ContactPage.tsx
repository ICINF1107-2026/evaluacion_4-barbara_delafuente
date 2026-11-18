import ContactForm from '../components/ContactForm/ContactForm';
import { profile } from '../data/portfolioData';
import './Pages.css';

export default function ContactPage() {
  return (
    <main className="page">
      <h1 className="page__title">Contacto</h1>
      <p>
        Escríbeme a <a href={`mailto:${profile.correo}`}>{profile.correo}</a> o revisa mi{' '}
        <a href={profile.github} target="_blank" rel="noopener noreferrer">perfil de GitHub</a>.
      </p>
      <ContactForm />
    </main>
  );
}