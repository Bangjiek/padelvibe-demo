import { useEffect, useState } from 'react';
import { Menu, X, CircleDot } from 'lucide-react';
import { siteConfig } from '@/data/site';
import Button from '@/components/ui/Button';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Navbar({ currentPath, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [currentPath]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNav = (path: string) => {
    onNavigate(path);
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ink-950/90 backdrop-blur-xl border-b border-white/5 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          {/* Logo */}
          <button
            onClick={() => handleNav('/')}
            className="flex items-center gap-2.5 group"
            aria-label="Padelvibe Indonesia home"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-500 transition-transform group-hover:scale-110">
              <CircleDot className="h-5 w-5 text-ink-950" strokeWidth={2.5} />
            </span>
            <span className="font-display text-lg font-bold tracking-tight text-white">
              Padelvibe
              <span className="text-accent-400"> ID</span>
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {siteConfig.nav.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNav(item.path)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  currentPath === item.path
                    ? 'text-accent-400'
                    : 'text-ink-200 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button size="sm" onClick={() => handleNav('/booking')}>
              Book a Court
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-ink-950/95 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
        <div className={`relative flex h-full flex-col justify-center px-8 transition-transform duration-300 ${mobileOpen ? 'translate-y-0' : '-translate-y-4'}`}>
          <nav className="flex flex-col gap-2">
            {siteConfig.nav.map((item, i) => (
              <button
                key={item.path}
                onClick={() => handleNav(item.path)}
                style={{ transitionDelay: mobileOpen ? `${i * 50}ms` : '0ms' }}
                className={`text-left text-2xl font-display font-semibold py-3 transition-all duration-300 ${
                  mobileOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
                } ${currentPath === item.path ? 'text-accent-400' : 'text-ink-100'}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="mt-8">
            <Button size="lg" className="w-full" onClick={() => handleNav('/booking')}>
              Book a Court
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
