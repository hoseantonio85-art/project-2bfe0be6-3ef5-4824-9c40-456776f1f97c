import { ReactNode } from "react";

interface BlockProps {
  label: string;
  className?: string;
  children?: ReactNode;
  muted?: boolean;
}

export function WireframeBlock({ label, className = "", children, muted }: BlockProps) {
  return (
    <div className={`rounded-lg border px-4 py-3 text-sm ${muted ? "bg-muted/50 text-muted-foreground" : "bg-card text-foreground"} ${className}`}>
      <span className="font-medium">{label}</span>
      {children}
    </div>
  );
}

export function WireframeContainer({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <div className="my-8 rounded-xl border-2 border-dashed border-border p-4 space-y-2">
      {label && <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">{label}</p>}
      {children}
    </div>
  );
}

export function ArrowFlow({ items }: { items: string[] }) {
  return (
    <div className="my-8 flex flex-wrap items-center gap-3">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="rounded-lg border bg-card px-4 py-2.5 text-sm font-medium shadow-sm">{item}</div>
          {i < items.length - 1 && <span className="text-muted-foreground text-lg">→</span>}
        </div>
      ))}
    </div>
  );
}
