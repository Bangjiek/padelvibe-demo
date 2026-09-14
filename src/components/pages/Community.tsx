import {
  Play, Swords, GraduationCap, PartyPopper, Trophy,
  ArrowRight, CalendarDays, Clock, Users, Sparkles,
} from 'lucide-react';
import Seo from '@/components/Seo';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { communityPrograms, communityImages, events, buildWhatsAppLink } from '@/data/site';

interface CommunityProps {
  onNavigate: (path: string) => void;
}

const iconMap: Record<string, typeof Play> = {
  Play, Swords, GraduationCap, PartyPopper, Trophy,
};

export default function Community({ onNavigate }: CommunityProps) {
  return (
    <>
      <Seo
        title="Community & Events"
        description="Join the Padelvibe Indonesia community. Open play, social matches, beginner sessions, tournaments, and community events in Tangerang."
        path="/community"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={communityImages.main} alt="" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/90 to-ink-950" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-accent-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-400">
                Community
              </span>
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl">
              Play. Connect.<br />
              <span className="text-accent-400">Repeat.</span>
            </h1>
            <p className="mt-6 text-lg text-ink-300 max-w-2xl">
              Padel is better together. Join a community that welcomes every level and makes every session feel like an event.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Programs"
            title="Find your format"
            description="From drop-in open play to competitive tournaments, there is a place for everyone at Padelvibe."
            align="center"
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {communityPrograms.map((program, i) => {
              const Icon = iconMap[program.icon] ?? Users;
              return (
                <Reveal key={program.title} delay={(i % 3 + 1) as 1 | 2 | 3}>
                  <div className="group h-full rounded-2xl border border-white/5 bg-ink-900/50 p-8 transition-all duration-300 hover:border-accent-500/20 hover:-translate-y-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 text-accent-400 transition-colors group-hover:bg-accent-500 group-hover:text-ink-950">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-white">{program.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-400">{program.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-24 sm:py-32 bg-ink-900/30">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Events"
            title="Upcoming events"
            description="Stay up to date with what is happening at Padelvibe."
          />

          {events.length > 0 ? (
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {events.map((event, i) => (
                <Reveal key={event.id} delay={(i % 3 + 1) as 1 | 2 | 3}>
                  <div className="group overflow-hidden rounded-2xl border border-white/5 bg-ink-900/50 transition-all duration-300 hover:border-accent-500/20 hover:-translate-y-1">
                    <div className="relative h-48 overflow-hidden">
                      <img src={event.image} alt={event.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute top-3 left-3">
                        <span className="rounded-full bg-accent-500 px-3 py-1 text-xs font-semibold text-ink-950">
                          {event.tag}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-white">{event.title}</h3>
                      <div className="mt-3 flex items-center gap-4 text-sm text-ink-400">
                        <span className="flex items-center gap-1.5">
                          <CalendarDays className="h-4 w-4 text-accent-400" />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4 text-accent-400" />
                          {event.time}
                        </span>
                      </div>
                      <p className="mt-3 text-sm text-ink-300">{event.description}</p>
                      <Button variant="ghost" size="sm" className="mt-5" href={buildWhatsAppLink(`Hi Padelvibe! I would like to register for ${event.title}.`)}>
                        Register
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal delay={1} className="mt-16">
              <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-ink-900/30 py-20 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ink-800 text-ink-500">
                  <Sparkles className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">No events scheduled yet</h3>
                <p className="mt-3 text-sm text-ink-400 max-w-md">
                  We are planning our next community events. Follow us on Instagram or join our WhatsApp to be the first to know.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button variant="ghost" href="https://instagram.com/padelvibe.id">
                    Follow on Instagram
                  </Button>
                  <Button href={buildWhatsAppLink('Hi Padelvibe! I would like to join the community and be notified about events.')}>
                    Join Community
                  </Button>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Join the <span className="text-accent-400">community</span>
            </h2>
            <p className="mt-4 text-ink-300 max-w-xl mx-auto">
              Whether you are a beginner or a seasoned player, there is a spot for you at Padelvibe.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button size="lg" onClick={() => onNavigate('/booking')}>
                Book a Court
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="ghost" href={buildWhatsAppLink('Hi Padelvibe! I would like to join the community.')}>
                Join Community
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
