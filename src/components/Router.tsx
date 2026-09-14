import { useState, useCallback, useEffect, type ReactNode } from 'react';

interface RouterProps {
  children: (path: string, navigate: (path: string) => void) => ReactNode;
}

export default function Router({ children }: RouterProps) {
  const [path, setPath] = useState(() => {
    if (typeof window === 'undefined') return '/';
    return window.location.pathname || '/';
  });

  const navigate = useCallback((newPath: string) => {
    if (newPath === path) return;
    window.history.pushState({}, '', newPath);
    setPath(newPath);
  }, [path]);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname || '/');
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  return <>{children(path, navigate)}</>;
}
