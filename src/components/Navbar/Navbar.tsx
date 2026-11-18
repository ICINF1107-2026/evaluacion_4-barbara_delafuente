import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '../../data/portfolioData';
import useTheme from '../../hooks/useTheme';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <NavLink to="/" className="navbar__logo" onClick={closeMenu} aria-label="Ir al inicio">
        BF
      </NavLink>

      <button
        type="button"
        className="navbar__toggle"
        aria-expanded={menuOpen}
        aria-controls="menu-principal"
        aria-label="Abrir o cerrar el menú"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        ☰
      </button>

      <button
        type="button"
        className="navbar__theme"
        onClick={toggleTheme}
        aria-label={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>

      <nav className="navbar__nav" aria-label="Principal">
        <ul id="menu-principal" className={menuOpen ? 'navbar__list navbar__list--open' : 'navbar__list'}>
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === '/'}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
