import { useState } from 'react';
import {
  Calendar, Clock, CircleDot, Check, ArrowRight, ArrowLeft,
  User, Phone, MessageCircle, Info,
} from 'lucide-react';
import Seo from '@/components/Seo';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import { courts, siteConfig, buildWhatsAppLink } from '@/data/site';

interface BookingProps {
  onNavigate: (path: string) => void;
}

const timeSlots = [
  '08:00', '09:30', '11:00', '12:30', '14:00', '15:30',
  '17:00', '18:30', '20:00', '21:30',
];

export default function Booking({ onNavigate }: BookingProps) {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [courtId, setCourtId] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const today = new Date().toISOString().split('T')[0];

  const validateStep = (s: number): boolean => {
    const errs: Record<string, string> = {};
    if (s === 1 && !date) errs.date = 'Please select a date';
    if (s === 2 && !time) errs.time = 'Please select a time slot';
    if (s === 3 && !courtId) errs.court = 'Please select a court';
    if (s === 4) {
      if (!name.trim()) errs.name = 'Please enter your name';
      if (!phone.trim()) errs.phone = 'Please enter your phone number';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) setStep(step + 1);
  };

  const prevStep = () => setStep(Math.max(1, step - 1));

  const selectedCourt = courts.find((c) => c.id === courtId);
  const formattedDate = date
    ? new Date(date + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
    : '';

  const handleConfirm = () => {
    if (!validateStep(4)) return;
    const message = `Hi Padelvibe! I would like to book a court.\n\nDate: ${formattedDate}\nTime: ${time}\nCourt: ${selectedCourt?.name ?? 'Not selected'}\nName: ${name}\nPhone: ${phone}`;
    window.open(buildWhatsAppLink(message), '_blank');
    setStep(5);
  };

  const steps = ['Date', 'Time', 'Court', 'Details', 'Confirm'];

  return (
    <>
      <Seo
        title="Book a Court"
        description="Book your padel court at Padelvibe Indonesia. Select your date, time, and court, then confirm via WhatsApp."
        path="/booking"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={courts[0].image} alt="" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/90 to-ink-950" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-accent-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-400">
                Booking
              </span>
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Book your <span className="text-accent-400">court</span>
            </h1>
            <p className="mt-4 text-lg text-ink-300 max-w-xl">
              Reserve your padel session in a few quick steps. Confirmation via WhatsApp.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Booking flow */}
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          {/* Progress */}
          <Reveal className="mb-8">
            <div className="flex items-center justify-between">
              {steps.map((label, i) => (
                <div key={label} className="flex flex-1 items-center">
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-300 ${
                        step > i + 1
                          ? 'border-accent-500 bg-accent-500 text-ink-950'
                          : step === i + 1
                          ? 'border-accent-500 text-accent-400'
                          : 'border-white/10 text-ink-500'
                      }`}
                    >
                      {step > i + 1 ? <Check className="h-5 w-5" /> : i + 1}
                    </div>
                    <span className={`hidden text-xs font-medium sm:block ${step >= i + 1 ? 'text-ink-200' : 'text-ink-500'}`}>
                      {label}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`mx-2 h-0.5 flex-1 rounded-full transition-colors duration-300 ${step > i + 1 ? 'bg-accent-500' : 'bg-white/10'}`} />
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-white/5 bg-ink-900/50 p-6 sm:p-8">
              {/* Step 1: Date */}
              {step === 1 && (
                <div className="animate-fade-in">
                  <div className="flex items-center gap-3 mb-6">
                    <Calendar className="h-5 w-5 text-accent-400" />
                    <h3 className="text-lg font-semibold text-white">Select a date</h3>
                  </div>
                  <input
                    type="date"
                    min={today}
                    value={date}
                    onChange={(e) => { setDate(e.target.value); setErrors({}); }}
                    className="w-full rounded-xl border border-white/10 bg-ink-950 px-4 py-3 text-white focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500 [color-scheme:dark]"
                  />
                  {errors.date && <p className="mt-2 text-sm text-error-400">{errors.date}</p>}
                </div>
              )}

              {/* Step 2: Time */}
              {step === 2 && (
                <div className="animate-fade-in">
                  <div className="flex items-center gap-3 mb-6">
                    <Clock className="h-5 w-5 text-accent-400" />
                    <h3 className="text-lg font-semibold text-white">Select a time slot</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => { setTime(slot); setErrors({}); }}
                        className={`rounded-xl border px-3 py-3 text-sm font-medium transition-all duration-200 ${
                          time === slot
                            ? 'border-accent-500 bg-accent-500/15 text-accent-400'
                            : 'border-white/10 bg-ink-950 text-ink-200 hover:border-accent-500/30'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                  {errors.time && <p className="mt-2 text-sm text-error-400">{errors.time}</p>}
                </div>
              )}

              {/* Step 3: Court */}
              {step === 3 && (
                <div className="animate-fade-in">
                  <div className="flex items-center gap-3 mb-6">
                    <CircleDot className="h-5 w-5 text-accent-400" />
                    <h3 className="text-lg font-semibold text-white">Select a court</h3>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {courts.map((court) => (
                      <button
                        key={court.id}
                        onClick={() => { setCourtId(court.id); setErrors({}); }}
                        className={`overflow-hidden rounded-xl border-2 text-left transition-all duration-200 ${
                          courtId === court.id
                            ? 'border-accent-500'
                            : 'border-white/10 hover:border-accent-500/30'
                        }`}
                      >
                        <img src={court.image} alt={court.name} className="h-32 w-full object-cover" />
                        <div className="p-4">
                          <div className="font-semibold text-white">{court.name}</div>
                          <div className="text-xs text-ink-400">{court.type}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                  {errors.court && <p className="mt-2 text-sm text-error-400">{errors.court}</p>}
                </div>
              )}

              {/* Step 4: Details */}
              {step === 4 && (
                <div className="animate-fade-in">
                  <div className="flex items-center gap-3 mb-6">
                    <User className="h-5 w-5 text-accent-400" />
                    <h3 className="text-lg font-semibold text-white">Your details</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-ink-200">Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => { setName(e.target.value); setErrors({}); }}
                        placeholder="Your full name"
                        className="w-full rounded-xl border border-white/10 bg-ink-950 px-4 py-3 text-white placeholder:text-ink-500 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500"
                      />
                      {errors.name && <p className="mt-2 text-sm text-error-400">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-ink-200">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => { setPhone(e.target.value); setErrors({}); }}
                        placeholder="08xx-xxxx-xxxx"
                        className="w-full rounded-xl border border-white/10 bg-ink-950 px-4 py-3 text-white placeholder:text-ink-500 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500"
                      />
                      {errors.phone && <p className="mt-2 text-sm text-error-400">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="mt-6 rounded-xl border border-white/5 bg-ink-950 p-5">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-3">Booking Summary</h4>
                    <dl className="space-y-2 text-sm">
                      <div className="flex justify-between"><dt className="text-ink-400">Date</dt><dd className="text-white">{formattedDate}</dd></div>
                      <div className="flex justify-between"><dt className="text-ink-400">Time</dt><dd className="text-white">{time}</dd></div>
                      <div className="flex justify-between"><dt className="text-ink-400">Court</dt><dd className="text-white">{selectedCourt?.name ?? '—'}</dd></div>
                    </dl>
                  </div>
                </div>
              )}

              {/* Step 5: Confirmation */}
              {step === 5 && (
                <div className="animate-fade-in text-center py-8">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success-500/15">
                    <Check className="h-8 w-8 text-success-400" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-white">Booking request sent!</h3>
                  <p className="mt-3 text-ink-300 max-w-md mx-auto">
                    We have opened WhatsApp with your booking details. Send the message to confirm your reservation with our team.
                  </p>
                  <div className="mt-6 rounded-xl border border-white/5 bg-ink-950 p-5 text-left">
                    <dl className="space-y-2 text-sm">
                      <div className="flex justify-between"><dt className="text-ink-400">Date</dt><dd className="text-white">{formattedDate}</dd></div>
                      <div className="flex justify-between"><dt className="text-ink-400">Time</dt><dd className="text-white">{time}</dd></div>
                      <div className="flex justify-between"><dt className="text-ink-400">Court</dt><dd className="text-white">{selectedCourt?.name ?? '—'}</dd></div>
                      <div className="flex justify-between"><dt className="text-ink-400">Name</dt><dd className="text-white">{name}</dd></div>
                    </dl>
                  </div>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <Button href={buildWhatsAppLink(`Hi Padelvibe! I would like to book a court.\n\nDate: ${formattedDate}\nTime: ${time}\nCourt: ${selectedCourt?.name ?? 'Not selected'}\nName: ${name}\nPhone: ${phone}`)}>
                      <MessageCircle className="h-4 w-4" />
                      Open WhatsApp Again
                    </Button>
                    <Button variant="ghost" onClick={() => onNavigate('/')}>
                      Back to Home
                    </Button>
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              {step < 5 && (
                <div className="mt-8 flex items-center justify-between">
                  {step > 1 ? (
                    <Button variant="ghost" size="sm" onClick={prevStep}>
                      <ArrowLeft className="h-4 w-4" />
                      Back
                    </Button>
                  ) : (
                    <span />
                  )}
                  {step < 4 ? (
                    <Button size="sm" onClick={nextStep}>
                      Continue
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button size="sm" onClick={handleConfirm}>
                      Confirm Booking
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              )}
            </div>
          </Reveal>

          {/* Note */}
          <Reveal delay={2} className="mt-6">
            <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-ink-900/30 p-4">
              <Info className="h-4 w-4 text-accent-400 shrink-0 mt-0.5" />
              <p className="text-xs text-ink-400">
                This is a booking request prototype. Your reservation is confirmed once our team responds on WhatsApp. A connected booking system can be integrated in the future.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
