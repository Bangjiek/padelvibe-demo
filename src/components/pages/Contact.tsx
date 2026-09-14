import { useState } from 'react';
import { MapPin, Phone, MessageCircle, Instagram, Clock, ArrowRight, Send, Check } from 'lucide-react';
import Seo from '@/components/Seo';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { siteConfig, faqs, buildWhatsAppLink } from '@/data/site';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
    setErrors({ ...errors, [field]: '' });
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Please enter your name';
    if (!form.email.trim()) errs.email = 'Please enter your email or WhatsApp';
    if (!form.subject.trim()) errs.subject = 'Please enter a subject';
    if (!form.message.trim()) errs.message = 'Please enter your message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const message = `Hi Padelvibe! I have a question.\n\nName: ${form.name}\nContact: ${form.email}\nSubject: ${form.subject}\nMessage: ${form.message}`;
    window.open(buildWhatsAppLink(message), '_blank');
    setSubmitted(true);
  };

  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with Padelvibe Indonesia. Find our location, contact details, operating hours, and answers to frequently asked questions."
        path="/contact"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/30689705/pexels-photo-30689705.jpeg?auto=compress&cs=tinysrgb&h=800&w=1920" alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/90 to-ink-950" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-accent-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-400">
                Contact
              </span>
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl">
              Get in <span className="text-accent-400">touch.</span>
            </h1>
            <p className="mt-6 text-lg text-ink-300 max-w-2xl">
              Questions, feedback, or just want to say hi? We would love to hear from you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact info */}
            <div>
              <SectionHeading
                eyebrow="Contact Details"
                title="Reach us directly"
              />

              <Reveal delay={1} className="mt-8 space-y-5">
                <div className="flex items-start gap-4 rounded-xl border border-white/5 bg-ink-900/50 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-500/10 text-accent-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Address</div>
                    <p className="mt-1 text-sm text-ink-400">{siteConfig.contact.address}</p>
                    <a href={siteConfig.contact.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 text-sm text-accent-400 hover:text-accent-300">
                      Get directions <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-white/5 bg-ink-900/50 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-500/10 text-accent-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Phone</div>
                    <a href={`tel:${siteConfig.contact.phone}`} className="mt-1 block text-sm text-ink-400 hover:text-accent-400">{siteConfig.contact.phone}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-white/5 bg-ink-900/50 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-500/10 text-accent-400">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">WhatsApp</div>
                    <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="mt-1 block text-sm text-ink-400 hover:text-accent-400">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-white/5 bg-ink-900/50 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-500/10 text-accent-400">
                    <Instagram className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Instagram</div>
                    <a href={siteConfig.contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="mt-1 block text-sm text-ink-400 hover:text-accent-400">
                      {siteConfig.contact.instagram}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-white/5 bg-ink-900/50 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-500/10 text-accent-400">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white">Operating Hours</div>
                    <ul className="mt-2 space-y-1">
                      {siteConfig.operatingHours.map((oh) => (
                        <li key={oh.day} className="text-sm text-ink-400">
                          <span className="text-ink-300">{oh.day}:</span> {oh.hours}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <div>
              <SectionHeading
                eyebrow="Send a Message"
                title="Ask us anything"
              />

              <Reveal delay={1} className="mt-8">
                {submitted ? (
                  <div className="rounded-2xl border border-success-500/20 bg-success-500/5 p-8 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success-500/15">
                      <Check className="h-8 w-8 text-success-400" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-white">Message sent!</h3>
                    <p className="mt-3 text-sm text-ink-300">
                      We have opened WhatsApp with your message. Send it to reach our team.
                    </p>
                    <Button variant="ghost" className="mt-6" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}>
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-white/5 bg-ink-900/50 p-6 sm:p-8">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-ink-200">Name</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="Your name"
                        className="w-full rounded-xl border border-white/10 bg-ink-950 px-4 py-3 text-white placeholder:text-ink-500 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500"
                      />
                      {errors.name && <p className="mt-2 text-sm text-error-400">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-ink-200">Email / WhatsApp</label>
                      <input
                        type="text"
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="Your email or WhatsApp number"
                        className="w-full rounded-xl border border-white/10 bg-ink-950 px-4 py-3 text-white placeholder:text-ink-500 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500"
                      />
                      {errors.email && <p className="mt-2 text-sm text-error-400">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-ink-200">Subject</label>
                      <input
                        type="text"
                        value={form.subject}
                        onChange={(e) => handleChange('subject', e.target.value)}
                        placeholder="What is this about?"
                        className="w-full rounded-xl border border-white/10 bg-ink-950 px-4 py-3 text-white placeholder:text-ink-500 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500"
                      />
                      {errors.subject && <p className="mt-2 text-sm text-error-400">{errors.subject}</p>}
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-ink-200">Message</label>
                      <textarea
                        value={form.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        placeholder="Your message"
                        rows={4}
                        className="w-full rounded-xl border border-white/10 bg-ink-950 px-4 py-3 text-white placeholder:text-ink-500 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500 resize-none"
                      />
                      {errors.message && <p className="mt-2 text-sm text-error-400">{errors.message}</p>}
                    </div>
                    <Button type="submit" className="w-full">
                      <Send className="h-4 w-4" />
                      Send Message
                    </Button>
                    <p className="text-center text-xs text-ink-500">
                      Your message will be sent via WhatsApp to our team.
                    </p>
                  </form>
                )}
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 sm:py-32 bg-ink-900/30">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
            align="center"
          />
          <div className="mt-12 space-y-4">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={(i + 1) as 1 | 2 | 3 | 4}>
                <details className="group rounded-xl border border-white/5 bg-ink-900/50 p-5 transition-colors hover:border-accent-500/20">
                  <summary className="flex cursor-pointer items-center justify-between text-sm font-medium text-white list-none">
                    {faq.question}
                    <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-500/10 text-accent-400 transition-transform group-open:rotate-45">
                      <span className="text-lg leading-none">+</span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-ink-400 leading-relaxed">{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="overflow-hidden rounded-2xl border border-white/5">
            <iframe
              title="Padelvibe Indonesia location"
              src={siteConfig.contact.mapsEmbed}
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
