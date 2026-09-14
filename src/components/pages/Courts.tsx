import { Check, ArrowRight, Info } from 'lucide-react';
import Seo from '@/components/Seo';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import { courts, facilities, siteConfig, buildWhatsAppLink } from '@/data/site';

interface CourtsProps {
  onNavigate: (path: string) => void;
}

export default function Courts({ onNavigate }: CourtsProps) {
  return (
    <>
      <Seo
        title="Courts & Facilities"
        description="Explore the premium padel courts and facilities at Padelvibe Indonesia in Tangerang. Glass-walled courts, modern clubhouse, and more."
        path="/courts"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={courts[0].image} alt="" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/90 to-ink-950" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-accent-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-400">
                Courts & Facilities
              </span>
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl">
              Premium courts.<br />
              Premium <span className="text-accent-400">experience.</span>
            </h1>
            <p className="mt-6 text-lg text-ink-300 max-w-2xl">
              Glass-walled, tournament-grade padel courts and modern facilities designed for the best playing experience in Tangerang.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Courts list */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Our Courts"
            title={<>The <span className="text-accent-400">courts</span></>}
            description="Each court is built to international standards with glass walls and premium surfaces."
          />

          <div className="mt-16 space-y-8">
            {courts.map((court, i) => (
              <Reveal key={court.id} delay={i === 0 ? 1 : i === 1 ? 2 : 3}>
                <div className="grid gap-8 rounded-2xl border border-white/5 bg-ink-900/50 p-6 sm:p-8 lg:grid-cols-2 lg:items-center">
                  <div className="overflow-hidden rounded-xl">
                    <img src={court.image} alt={court.name} loading="lazy" className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-bold text-white">{court.name}</h3>
                      <Badge variant="accent">{court.type}</Badge>
                    </div>
                    <p className="mt-2 text-ink-400">{court.surface}</p>
                    <ul className="mt-6 space-y-3">
                      {court.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm text-ink-200">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-500/15">
                            <Check className="h-3 w-3 text-accent-400" />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Button onClick={() => onNavigate('/booking')}>
                        Book {court.name}
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities grid */}
      <section className="py-24 sm:py-32 bg-ink-900/30">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Beyond the Courts"
            title="Facilities & amenities"
            description="Everything you need for a great session, on and off the court."
            align="center"
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility, i) => (
              <Reveal key={facility.name} delay={(i % 3 + 1) as 1 | 2 | 3}>
                <div className="group relative h-80 overflow-hidden rounded-2xl">
                  <img src={facility.image} alt={facility.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
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

          <Reveal delay={2} className="mt-12 flex items-center justify-center gap-3 rounded-xl border border-white/5 bg-ink-900/50 p-5 text-center">
            <Info className="h-5 w-5 text-accent-400 shrink-0" />
            <p className="text-sm text-ink-300">
              Some facilities are marked as Coming Soon. We are continuously improving the Padelvibe experience.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Ready to <span className="text-accent-400">play?</span>
            </h2>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button size="lg" onClick={() => onNavigate('/booking')}>
                Book a Court
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="ghost" href={buildWhatsAppLink('Hi Padelvibe! I would like to know more about your courts.')}>
                Ask a Question
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
