import {
  Trophy, Sparkles, Users, CalendarCheck,
  ArrowRight, MapPin, MessageCircle, Phone,
  Play, Swords, GraduationCap, PartyPopper,
  Calendar, CalendarDays, Crown, CircleDot,
  X,
} from 'lucide-react';
import { useState } from 'react';
import Seo from '@/components/Seo';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import {
  siteConfig, stats, benefits, facilities, communityPrograms,
  galleryImages, heroImage, buildWhatsAppLink,
} from '@/data/site';

const iconMap: Record<string, typeof Trophy> = {
  Trophy, Sparkles, Users, CalendarCheck,
  Play, Swords, GraduationCap, PartyPopper,
  Calendar, CalendarDays, Crown, CircleDot,
};

interface HomeProps {
  onNavigate: (path: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <Seo
        title="Premium Padel Club in Tangerang"
        description="Padelvibe Indonesia is a premium padel club in Tangerang. Play padel, meet your community, and find your vibe. Book your court today."
        path="/"
      />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Premium padel court"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-5 pt-24 pb-16 sm:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6 animate-fade-down">
              <span className="h-px w-10 bg-accent-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-400">
                {siteConfig.brand.positioning}
              </span>
            </div>

            <h1 className="font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-8xl animate-fade-up">
              Your Game.
              <br />
              Your <span className="text-accent-400">Vibe.</span>
            </h1>

            <p className="mt-6 text-lg text-ink-200 sm:text-xl max-w-xl animate-fade-up" style={{ animationDelay: '0.15s' }}>
              Play padel. Meet your people. Find your vibe.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Button size="lg" onClick={() => onNavigate('/booking')}>
                Book a Court
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="ghost" onClick={() => onNavigate('/courts')}>
                Explore the Club
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-300 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                Padel Club
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-accent-400" />
                {siteConfig.brand.location}
              </span>
              <span className="flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-accent-400" />
                Premium Sports &amp; Lifestyle
              </span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/20 p-1.5">
            <div className="h-2 w-1 rounded-full bg-white/40 animate-bounce" />
          </div>
        </div>
      </section>

      {/* SECTION A — Brand Introduction */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Welcome to Padelvibe"
                title={<>More than a court.<br />It's a <span className="text-accent-400">vibe.</span></>}
                description="Padelvibe Indonesia is where you play padel, meet your community, and enjoy a modern sports experience. Built for the game, designed for the vibe."
              />
              <Reveal delay={2} className="mt-8">
                <Button variant="ghost" onClick={() => onNavigate('/about')}>
                  Discover our story
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Reveal>
            </div>

            <Reveal delay={1} className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/5 bg-ink-900/50 p-6 transition-all duration-300 hover:border-accent-500/20 hover:bg-ink-900"
                >
                  <div className="font-display text-4xl font-bold text-accent-400 sm:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm font-medium text-white">{stat.label}</div>
                  <div className="mt-1 text-xs text-ink-400">{stat.note}</div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION B — Why Padelvibe */}
      <section className="relative py-24 sm:py-32 bg-ink-900/30">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Why Padelvibe"
            title="Everything you need to play"
            description="From premium courts to a welcoming community, we've built Padelvibe for every kind of player."
            align="center"
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, i) => {
              const Icon = iconMap[benefit.icon] ?? Sparkles;
              return (
                <Reveal key={benefit.title} delay={(i + 1) as 1 | 2 | 3 | 4}>
                  <div className="group h-full rounded-2xl border border-white/5 bg-ink-900/50 p-8 transition-all duration-300 hover:border-accent-500/20 hover:bg-ink-900 hover:-translate-y-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 text-accent-400 transition-colors group-hover:bg-accent-500 group-hover:text-ink-950">
                      <Icon className="h-6 w-6" strokeWidth={2} />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-white">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-400">{benefit.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION C — Courts & Facilities */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Courts & Facilities"
              title={<>Built for the <span className="text-accent-400">game</span></>}
              description="Premium glass courts and modern facilities designed for the best padel experience."
            />
            <Reveal delay={2}>
              <Button variant="ghost" onClick={() => onNavigate('/courts')}>
                Explore our facilities
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.slice(0, 6).map((facility, i) => (
              <Reveal key={facility.name} delay={(i % 3 + 1) as 1 | 2 | 3}>
                <div className="group relative h-80 overflow-hidden rounded-2xl">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-card-overlay" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="mb-3">
                      <Badge variant={facility.status === 'Available' ? 'success' : 'warning'}>
                        {facility.status}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-white">{facility.name}</h3>
                    <p className="mt-1 text-sm text-ink-300 line-clamp-2">{facility.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION D — Booking CTA */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/38254515/pexels-photo-38254515.jpeg?auto=compress&cs=tinysrgb&h=800&w=1920"
            alt=""
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-ink-950/85" />
        </div>

        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="font-display text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Ready to find <br className="sm:hidden" />your <span className="text-accent-400">vibe?</span>
            </h2>
            <p className="mt-6 text-lg text-ink-300 max-w-xl mx-auto">
              Book your next padel session and experience Padelvibe Indonesia.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button size="lg" onClick={() => onNavigate('/booking')}>
                Book a Court
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" href={buildWhatsAppLink('Hi Padelvibe! I would like to book a court.')}>
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION E — Community */}
      <section className="relative py-24 sm:py-32 bg-ink-900/30">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.pexels.com/photos/13106810/pexels-photo-13106810.jpeg?auto=compress&cs=tinysrgb&h=600&w=500"
                  alt="Community at Padelvibe"
                  loading="lazy"
                  className="h-full w-full rounded-2xl object-cover"
                />
                <div className="grid gap-4">
                  <img
                    src="https://images.pexels.com/photos/35248286/pexels-photo-35248286.jpeg?auto=compress&cs=tinysrgb&h=400&w=500"
                    alt="Player in action"
                    loading="lazy"
                    className="h-full w-full rounded-2xl object-cover"
                  />
                  <img
                    src="https://images.pexels.com/photos/35248468/pexels-photo-35248468.jpeg?auto=compress&cs=tinysrgb&h=400&w=500"
                    alt="Player with racket"
                    loading="lazy"
                    className="h-full w-full rounded-2xl object-cover"
                  />
                </div>
              </div>
            </Reveal>

            <div className="order-1 lg:order-2">
              <SectionHeading
                eyebrow="Community"
                title={<>Play. Connect. <span className="text-accent-400">Repeat.</span></>}
                description="Padel is better together. Join a community that welcomes every level, from first-timers to seasoned competitors."
              />
              <div className="mt-8 space-y-3">
                {communityPrograms.map((program, i) => {
                  const Icon = iconMap[program.icon] ?? Users;
                  return (
                    <Reveal key={program.title} delay={(i + 1) as 1 | 2 | 3 | 4}>
                      <div className="flex items-start gap-4 rounded-xl border border-white/5 bg-ink-900/50 p-4 transition-colors hover:border-accent-500/20">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-500/10 text-accent-400">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white">{program.title}</h4>
                          <p className="mt-1 text-sm text-ink-400">{program.description}</p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
              <Reveal delay={3} className="mt-8">
                <Button variant="ghost" onClick={() => onNavigate('/community')}>
                  Join the community
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION F — Gallery */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Gallery"
            title="The Padelvibe experience"
            description="A glimpse of the courts, the players, and the vibe."
            align="center"
          />

          <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {galleryImages.map((img, i) => (
              <Reveal
                key={i}
                delay={(i % 4 + 1) as 1 | 2 | 3 | 4}
                className={img.span === 'lg' ? 'col-span-2 row-span-2' : img.span === 'md' ? 'col-span-2' : ''}
              >
                <button
                  onClick={() => setLightboxIndex(i)}
                  className="group relative block h-full w-full overflow-hidden rounded-xl"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink-950/0 transition-colors duration-300 group-hover:bg-ink-950/20" />
                </button>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/95 backdrop-blur-md p-4 animate-fade-in"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </section>

      {/* SECTION G — Location */}
      <section className="relative py-24 sm:py-32 bg-ink-900/30">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Find Us"
                title={<>The next game <span className="text-accent-400">starts here</span></>}
              />

              <Reveal delay={1} className="mt-8 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-0.5 text-accent-400 shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-white">{siteConfig.brand.name}</div>
                    <p className="mt-1 text-sm text-ink-400">{siteConfig.contact.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-accent-400 shrink-0" />
                  <a href={`tel:${siteConfig.contact.phone}`} className="text-sm text-ink-300 hover:text-accent-400 transition-colors">
                    {siteConfig.contact.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-accent-400 shrink-0" />
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink-300 hover:text-accent-400 transition-colors"
                  >
                    WhatsApp {siteConfig.contact.phone}
                  </a>
                </div>

                <div className="rounded-xl border border-white/5 bg-ink-900/50 p-5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-3">
                    Operating Hours
                  </h4>
                  <ul className="space-y-2">
                    {siteConfig.operatingHours.map((oh) => (
                      <li key={oh.day} className="flex items-center justify-between text-sm">
                        <span className="text-ink-300">{oh.day}</span>
                        <span className="text-white">{oh.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button href={siteConfig.contact.mapsUrl}>
                    Get Directions
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" href={buildWhatsAppLink('Hi Padelvibe! I would like to know more.')}>
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </Button>
                </div>
              </Reveal>
            </div>

            <Reveal delay={2} className="overflow-hidden rounded-2xl border border-white/5 min-h-[400px]">
              <iframe
                title="Padelvibe Indonesia location"
                src={siteConfig.contact.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
