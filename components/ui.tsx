import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-6 sm:px-8 ${className}`}>{children}</div>;
}

export function SectionHeading({ index, eyebrow, title }: { index: string; eyebrow: string; title: string }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-mono text-sm text-accent">
        {index} — {eyebrow}
      </p>
      <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.1] font-semibold tracking-[-0.03em]">
        {title}
      </h2>
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return <li className="rounded-full bg-raised px-3 py-1.5 font-mono text-[13px]">{children}</li>;
}

const buttonBase =
  "inline-flex min-h-[52px] items-center gap-2.5 rounded-full px-6 font-medium transition-colors";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  download = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  external?: boolean;
  download?: boolean;
}) {
  const styles =
    variant === "primary"
      ? "bg-accent font-semibold text-ink hover:bg-[#d6f78a]"
      : "border border-line-strong text-text hover:border-subtle";
  return (
    <a
      href={href}
      className={`${buttonBase} ${styles}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(download ? { download: true } : {})}
    >
      {children}
    </a>
  );
}

export function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function ImagePlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl border border-dashed border-[#4a5360] bg-surface p-6 text-center font-mono text-sm text-subtle ${className}`}
    >
      [{label}]
    </div>
  );
}
