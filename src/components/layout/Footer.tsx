import { CircleDot, Instagram, MapPin, Phone, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/site';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="border-t border-white/5 bg-ink-950">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-500">
                <CircleDot className="h-5 w-5 text-ink-950" strokeWidth={2.5} />
              </span>
              <span className="font-display text-lg font-bold text-white">
                Padelvibe<span className="text-accent-400"> ID</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-ink-400 max-w-xs">
              Premium padel club in Tangerang. Play padel, meet your community, and find your vibe.
            </p>
            <a
              href={siteConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-ink-300 hover:text-accent-400 transition-colors"
            >
              <Instagram className="h-4 w-4" />
              {siteConfig.contact.instagram}
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-4">
              Explore
            </h4>
            <ul className="space-y-3">
              {siteConfig.nav.map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => onNavigate(item.path)}
                    className="text-sm text-ink-300 hover:text-accent-400 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('/booking')}
                  className="text-sm font-medium text-accent-400 hover:text-accent-300 transition-colors"
                >
                  Book a Court
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-ink-300">
                <MapPin className="h-4 w-4 mt-0.5 text-accent-400 shrink-0" />
                <span>{siteConfig.contact.addressShort}</span>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-2.5 text-sm text-ink-300 hover:text-accent-400 transition-colors"
                >
                  <Phone className="h-4 w-4 text-accent-400 shrink-0" />
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-ink-300 hover:text-accent-400 transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-accent-400 shrink-0" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-4">
              Operating Hours
            </h4>
            <ul className="space-y-3">
              {siteConfig.operatingHours.map((oh) => (
                <li key={oh.day} className="text-sm text-ink-300">
                  <div className="font-medium text-ink-200">{oh.day}</div>
                  <div className="text-ink-400">{oh.hours}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-ink-500">
            &copy; {new Date().getFullYear()} {siteConfig.brand.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button className="text-xs text-ink-500 hover:text-ink-300 transition-colors">
              Privacy Policy
            </button>
            <button className="text-xs text-ink-500 hover:text-ink-300 transition-colors">
              Terms &amp; Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
