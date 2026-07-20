const sparks = Array.from({ length: 18 }).map((_, i) => ({
  left: `${(i * 37) % 100}%`,
  delay: `${(i * 0.37) % 2.8}s`,
  drift: `${((i % 5) - 2) * 12}px`,
  size: 2 + (i % 3),
}));

export default function SparkParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {sparks.map((s, i) => (
        <span
          key={i}
          className="absolute bottom-0 animate-spark rounded-full bg-brand"
          style={
            {
              left: s.left,
              width: s.size,
              height: s.size,
              animationDelay: s.delay,
              boxShadow: "0 0 6px 1px rgba(255,95,19,0.8)",
              "--drift": s.drift,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
