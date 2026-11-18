import type { NavItem, Profile, ProjectItem } from '../types';
import hannibalImg from '../assets/img/Hannibal-banner.jpg';
import gatosImg from '../assets/img/Gatos-banner.jpg';

export const GITHUB_USER = 'BarbaraDLF27';

export const profile: Profile = {
  nombre: 'Bárbara de la Fuente',
  resumen:
    'Estudiante de Ingeniería Informática — aprendiendo a programar y construyendo mis primeros proyectos.',
  sobreMi:
    'Soy estudiante de Ingeniería Informática en la Universidad Católica de Temuco, cursando actualmente primer año. Elegí esta carrera porque me interesa entender cómo funcionan los programas que uso todos los días. En este portafolio presento algunos de mis proyectos.',
  correo: 'bdelafuente2025@alu.uct.cl',
  github: 'https://github.com/BarbaraDLF27',
};

export const navItems: NavItem[] = [
  { path: '/', label: 'Inicio' },
  { path: '/sobre-mi', label: 'Sobre mí' },
  { path: '/proyectos', label: 'Proyectos' },
  { path: '/habilidades', label: 'Habilidades' },
  { path: '/contacto', label: 'Contacto' },
];

export const projects: ProjectItem[] = [
  {
    id: 1,
    titulo: 'Hannibal Web',
    descripcion:
      'Página informativa sobre la serie Hannibal, con introducción a la trama y galería de personajes.',
    tecnologias: ['HTML5', 'CSS3'],
    urlRepo: 'https://github.com/BarbaraDLF27/Hannnibal-web',
    urlSitio: 'https://hannnibal-web.vercel.app/',
    imagen: hannibalImg,
    imagenAlt: 'Silueta de Hannibal Lecter junto al título de la serie Hannibal',
  },
  {
    id: 2,
    titulo: 'Mundo Gatuno',
    descripcion:
      'Página informativa sobre gatos: datos generales, razas exóticas y galería de fotos. Trabajado en equipo.',
    tecnologias: ['HTML5', 'CSS3'],
    urlRepo: 'https://github.com/BarbaraDLF27/Mi-primera-web',
    urlSitio: 'https://felinochokito.vercel.app/',
    imagen: gatosImg,
    imagenAlt: 'Gatitos de distintos colores alineados',
  },
  {
    id: 3,
    titulo: 'Portafolio en React',
    descripcion:
      'Migración de mi portafolio a una SPA con React, TypeScript, React Router y consumo de la API de GitHub.',
    tecnologias: ['React', 'TypeScript'],
    urlRepo: 'https://github.com/BarbaraDLF27/evaluacion_4-barbara_delafuente',
  },
];

export const skills: string[] = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'TypeScript',
  'Git / GitHub',
  'VS Code',
];