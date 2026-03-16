import Link from 'next/link';
import { LucideIcon, MapPin } from 'lucide-react';

type DirectionsLinkProps = {
  destination?: string;
  href?: string;
  external?: boolean;
  disabled?: boolean;
  className?: string;
  label?: string;
  icon?: LucideIcon;
};

export default function DirectionsLink({
  destination,
  href,
  external,
  disabled = false,
  className = '',
  label = 'Ottieni indicazioni',
  icon: Icon = MapPin,
}: DirectionsLinkProps) {
  const finalHref =
    href ??
    (destination
      ? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`
      : '#');

  const openExternal = external ?? (!href && Boolean(destination));
  const isInternal = !openExternal && finalHref.startsWith('/');
  const linkClassName = `inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold ${className}`.trim();

  if (disabled) {
    return (
      <span className={linkClassName}>
        <Icon size={20} />
        <span>{label}</span>
      </span>
    );
  }

  if (isInternal) {
    return (
      <Link href={finalHref} className={linkClassName}>
        <Icon size={20} />
        <span>{label}</span>
      </Link>
    );
  }

  return (
    <a
      href={finalHref}
      target={openExternal ? '_blank' : undefined}
      rel={openExternal ? 'noopener noreferrer' : undefined}
      className={linkClassName}
    >
      <Icon size={20} />
      <span>{label}</span>
    </a>
  );
}
