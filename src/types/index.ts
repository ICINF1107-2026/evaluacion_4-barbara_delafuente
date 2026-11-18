import type { ReactNode } from 'react';

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
}

export interface ProjectItem {
  id: number;
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  urlRepo: string;
  urlSitio?: string;
  imagen?: string;
  imagenAlt?: string;
}

export interface NavItem {
  path: string;
  label: string;
}

export interface Profile {
  nombre: string;
  resumen: string;
  sobreMi: string;
  correo: string;
  github: string;
}

export type Theme = 'light' | 'dark';

export interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

export interface ChildrenProps {
  children: ReactNode;
}

export interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export interface StatusMessageProps {
  type: 'loading' | 'error';
  message: string;
}

export interface ProjectCardProps {
  project: ProjectItem;
}

export interface RepoCardProps {
  repo: GitHubRepo;
}

export interface ProjectFilterProps {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
}

export interface FormValues {
  nombre: string;
  correo: string;
  mensaje: string;
}

export type FormErrors = Partial<Record<keyof FormValues, string>>;