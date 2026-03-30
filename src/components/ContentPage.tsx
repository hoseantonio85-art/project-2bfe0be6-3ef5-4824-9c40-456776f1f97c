import { ReactNode } from "react";

interface ContentPageProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function ContentPage({ title, subtitle, children }: ContentPageProps) {
  return (
    <article className="max-w-3xl mx-auto px-6 py-12 lg:py-16">
      <header className="mb-10">
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-3">{title}</h1>
        {subtitle && <p className="text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
      </header>
      <div className="docs-prose">{children}</div>
    </article>
  );
}
