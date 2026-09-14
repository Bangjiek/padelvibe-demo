import { Calendar, CalendarDays, Crown, CircleDot, ArrowRight, Info } from 'lucide-react';
import Seo from '@/components/Seo';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { pricing, pricingNote, buildWhatsAppLink } from '@/data/site';

interface PricingProps {
  onNavigate: (path: string) => void;
}

const iconMap: Record<string, typeof Calendar> = {
  Calendar,
  CalendarDays,
  Crown,
  CircleDot,
};

export default function Pricing({ onNavigate }: PricingProps) {
  return (
    <>
      <Seo
        title="Pricing"
        description="View padel court rental rates at Padelvibe Indonesia. Weekday, weekend, peak hour, off-peak, membership, and equipment rental pricing."
        path="/pricing"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/32896996/pexels-photo-32896996.jpeg?auto=compress&cs=tinysrgb&h=800&w=1920" alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/90 to-ink-950" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-accent-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-400">
                Pricing
              </span>
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl">
              Simple rates.<br />
              No <span className="text-accent-400">surprises.</span>
            </h1>
            <p className="mt-6 text-lg text-ink-300 max-w-2xl">
              Transparent pricing for court rentals, memberships, and equipment. Contact us for the latest rates.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pricing.map((category, i) => {
              const Icon = iconMap[category.icon] ?? Calendar;
              const isFeatured = category.category === 'Membership';
              return (
                <Reveal key={category.category} delay={(i + 1) as 1 | 2 | 3 | 4}>
                  <div
                    className={`relative h-full rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 ${
                      isFeatured
                        ? 'border-accent-500/30 bg-gradient-to-b from-accent-500/10 to-ink-900/50'
                        : 'border-white/5 bg-ink-900/50 hover:border-accent-500/20'
                    }`}
                  >
                    {isFeatured && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="rounded-full bg-accent-500 px-4 py-1 text-xs font-semibold text-ink-950">
                          Best Value
                        </span>
                      </div>
                    )}
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 text-accent-400">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-white">{category.category}</h3>
                    <div className="mt-6 space-y-4">
                      {category.rates.map((rate) => (
                        <div key={rate.label} className="flex items-baseline justify-between border-b border-white/5 pb-3">
                          <div>
                            <div className="text-sm font-medium text-ink-200">{rate.label}</div>
                            <div className="text-xs text-ink-500">{rate.duration}</div>
                          </div>
                          <div className="font-display text-lg font-bold text-accent-400">
                            {rate.price}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Note */}
          <Reveal delay={2} className="mt-12">
            <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-ink-900/50 p-5">
              <Info className="h-5 w-5 text-accent-400 shrink-0 mt-0.5" />
              <p className="text-sm text-ink-300">{pricingNote}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-ink-900/30">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Book your <span className="text-accent-400">session</span>
            </h2>
            <p className="mt-4 text-ink-300 max-w-xl mx-auto">
              Ready to hit the court? Book your session or contact us for the latest rates.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button size="lg" onClick={() => onNavigate('/booking')}>
                Book Your Session
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="ghost" href={buildWhatsAppLink('Hi Padelvibe! I would like to ask about pricing.')}>
                Ask About Pricing
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
