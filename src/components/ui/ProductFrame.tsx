interface ProductFrameProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  imgClassName?: string;
}

const sizeStyles: Record<NonNullable<ProductFrameProps["size"]>, string> = {
  sm: "aspect-[4/3] p-7 sm:p-8",
  md: "aspect-[4/3] p-8 sm:p-10",
  lg: "aspect-[5/4] p-10 sm:p-14",
};

export default function ProductFrame({ src, alt, size = "sm", imgClassName = "" }: ProductFrameProps) {
  return (
    <div
      className={`relative overflow-hidden rounded bg-gradient-to-br from-white via-surface-muted to-surface-alt dark:from-white dark:via-white dark:to-surface-muted ${sizeStyles[size]}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_36%,rgba(255,95,19,0.14),transparent_62%)]" />
      <div className="pointer-events-none absolute inset-x-[14%] bottom-[9%] h-[12%] rounded-[50%] bg-ink-950/10 blur-xl" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`relative h-full w-full object-contain drop-shadow-[0_18px_20px_rgba(14,19,42,0.15)] ${imgClassName}`}
      />
    </div>
  );
}
