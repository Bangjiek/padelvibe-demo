import { Target, Heart, Users, Trophy, Sparkles, ArrowRight } from 'lucide-react';
import Seo from '@/components/Seo';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { aboutImages, siteConfig } from '@/data/site';

interface AboutProps {
  onNavigate: (path: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const values = [
    { icon: Target, title: 'Built for the Game', description: 'Every court, every surface, every detail is designed to give you the best playing experience.' },
    { icon: Heart, title: 'Community First', description: 'We are not just a venue. We are a community of players who welcome everyone to the sport.' },
    { icon: Sparkles, title: 'Premium Experience', description: 'From the moment you arrive, we want you to feel the difference. Modern, clean, and considered.' },
    { icon: Users, title: 'For Every Level', description: 'Whether it is your first time holding a racket or your hundredth match, Padelvibe is for you.' },
  ];

  return (
    <>
      <Seo
        title="About Us"
        description="Padelvibe Indonesia is built for the game and designed for the vibe. Learn about our vision, mission, and community-first approach to padel."
        path="/about"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutImages.main} alt="" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/90 to-ink-950" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-accent-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-400">
                About Padelvibe
              </span>
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl">
              Built for the game.<br />
              Designed for the <span className="text-accent-400">vibe.</span>
            </h1>
            <p className="mt-6 text-lg text-ink-300 max-w-2xl">
              Padelvibe Indonesia was created with one belief: padel is more than a sport. It is a way to connect, to move, and to find your community.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal className="grid grid-cols-2 gap-4">
              <img src={aboutImages.secondary} alt="Padel player in action" loading="lazy" className="rounded-2xl object-cover h-full w-full" />
              <img src={aboutImages.tertiary} alt="Padel equipment" loading="lazy" className="rounded-2xl object-cover h-full w-full mt-8" />
            </Reveal>
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title={<>More than a <span className="text-accent-400">court</span></>}
                description="Padelvibe Indonesia was born from a passion for the game and a desire to build something different in Tangerang. A place where premium facilities meet a welcoming community. Where the energy of the sport meets the comfort of a lifestyle destination."
              />
              <Reveal delay={2} className="mt-6">
                <p className="text-ink-400 leading-relaxed">
                  We believe padel should be accessible, social, and exciting. Whether you are picking up a racket for the first time or you have been playing for years, Padelvibe is your home court.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 sm:py-32 bg-ink-900/30">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-white/5 bg-ink-900/50 p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 text-accent-400 mb-6">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">Our Vision</h3>
                <p className="mt-3 text-ink-400 leading-relaxed">
                  To be the premier padel destination in Tangerang, where sport, community, and lifestyle come together.
                </p>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="h-full rounded-2xl border border-white/5 bg-ink-900/50 p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 text-accent-400 mb-6">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">Our Mission</h3>
                <p className="mt-3 text-ink-400 leading-relaxed">
                  To grow the padel community by providing premium facilities, a welcoming atmosphere, and an experience that keeps players coming back.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Why choose Padelvibe"
            align="center"
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={(i + 1) as 1 | 2 | 3 | 4}>
                <div className="group h-full rounded-2xl border border-white/5 bg-ink-900/50 p-6 transition-all duration-300 hover:border-accent-500/20 hover:-translate-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 text-accent-400 transition-colors group-hover:bg-accent-500 group-hover:text-ink-950">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-white">{value.title}</h3>
                  <p className="mt-2 text-sm text-ink-400 leading-relaxed">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-ink-900/30">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              The next game <span className="text-accent-400">starts here</span>
            </h2>
            <p className="mt-4 text-ink-300 max-w-xl mx-auto">
              Experience Padelvibe Indonesia for yourself.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button size="lg" onClick={() => onNavigate('/booking')}>
                Book a Court
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="ghost" onClick={() => onNavigate('/courts')}>
                Explore Facilities
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
