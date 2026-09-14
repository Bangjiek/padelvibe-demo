interface BadgeProps {
  children: string;
  variant?: 'default' | 'accent' | 'success' | 'warning';
}

export default function Badge({ children, variant = 'default' }: BadgeProps) {
  const variants = {
    default: 'bg-white/10 text-ink-200',
    accent: 'bg-accent-500/15 text-accent-300 border border-accent-500/20',
    success: 'bg-success-500/15 text-success-400 border border-success-500/20',
    warning: 'bg-warning-500/15 text-warning-400 border border-warning-500/20',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${variants[variant]}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${variant === 'success' ? 'bg-success-400' : variant === 'warning' ? 'bg-warning-400' : variant === 'accent' ? 'bg-accent-400' : 'bg-ink-400'}`} />
      {children}
    </span>
  );
}
