import { ReactNode } from "react";

export default function LiquidText({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-block bg-[length:250%_100%] bg-clip-text text-transparent animate-liquidFlow ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(100deg, #c94708 0%, #ff5f13 18%, #ffb27a 32%, #ff5f13 46%, #e25311 60%, #ff5f13 78%, #c94708 100%)",
      }}
    >
      {children}
    </span>
  );
}
