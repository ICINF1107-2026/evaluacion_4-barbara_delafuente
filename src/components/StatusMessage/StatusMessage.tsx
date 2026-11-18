import type { StatusMessageProps } from '../../types';
import './StatusMessage.css';

export default function StatusMessage({ type, message }: StatusMessageProps) {
  const isError = type === 'error';
  return (
    <div
      className={isError ? 'status status--error' : 'status'}
      role={isError ? 'alert' : 'status'}
      aria-live={isError ? 'assertive' : 'polite'}
    >
      {message}
    </div>
  );
}
