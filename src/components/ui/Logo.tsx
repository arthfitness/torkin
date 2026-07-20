interface LogoProps {
  className?: string;
  onDark?: boolean;
}

export default function Logo({ className = "h-12 w-auto", onDark = false }: LogoProps) {
  const img = (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/images/logo/torkin-logo.jpg" alt="Torkin — Torque Inside. Power Delivered." className={className} />
  );

  if (!onDark) return img;

  return <div className="w-fit rounded bg-white p-1.5">{img}</div>;
}
