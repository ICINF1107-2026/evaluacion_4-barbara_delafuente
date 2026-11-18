import { useEffect, useState } from 'react';
import type { FetchState } from '../types';

export default function useFetchApi<T>(url: string): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      setState((prev) => ({ ...prev, loading: true, error: null }));
      try {
        const response = await fetch(url, { signal: abortController.signal });
        if (!response.ok) {
          throw new Error(`Error HTTP ${response.status}`);
        }
        const result: T = await response.json();
        setState({ data: result, loading: false, error: null });
      } catch (err) {
        if (err instanceof DOMException && err.name === 'AbortError') return;
        const detalle = err instanceof Error ? err.message : 'Error desconocido';
        setState({
          data: null,
          loading: false,
          error: `No fue posible obtener los datos (${detalle}). Intenta nuevamente en unos minutos.`,
        });
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url]);

  return state;
}
