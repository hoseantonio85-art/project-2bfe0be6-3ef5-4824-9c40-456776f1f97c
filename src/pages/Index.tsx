import { Link } from "react-router-dom";
import { BookOpen, Layers, Layout, Compass, ArrowRight, Lightbulb } from "lucide-react";

const sections = [
  { icon: Lightbulb, title: "Основа проектирования", desc: "Почему сначала данные, потом экран. Принципы, на которых строится интерфейс.", path: "/design/data-first" },
  { icon: Layout, title: "Типы страниц", desc: "Список, объект, сводка, форма — для чего каждый тип и как он устроен.", path: "/pages/overview" },
  { icon: BookOpen, title: "Анатомия экранов", desc: "Из чего состоит каждый экран: хедер, мета, контент, связи.", path: "/anatomy/list-page" },
  { icon: Layers, title: "Слои интерфейса", desc: "Как страница, дровер и модалка работают вместе.", path: "/layers" },
  { icon: Compass, title: "Сценарии", desc: "Реальные маршруты пользователя: от списка к решению.", path: "/scenarios" },
];

const principles = [
  "Сначала сигнал, потом детали",
  "Интерфейс помогает понять, а не заставляет искать",
  "Каждый слой сохраняет контекст",
  "Структура определяется данными, а не привычкой",
];

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
      {/* Hero */}
      <div className="mb-16">
        <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">UX Handbook</p>
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-5 leading-tight">
          Как устроен интерфейс<br />и почему он помогает решать
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Практическое описание дизайн-системы B2B продукта: какие бывают страницы, 
          как раскрывается информация и почему всё это помогает пользователю быстрее 
          понять ситуацию и принять решение.
        </p>
        <div className="mt-8 flex gap-3">
          <Link to="/why" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
            Начать чтение <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/principles" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-medium hover:bg-muted transition-colors">
            Принципы
          </Link>
        </div>
      </div>

      {/* Section cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        {sections.map((s) => (
          <Link
            key={s.path}
            to={s.path}
            className="group rounded-xl border border-border bg-card p-5 hover:shadow-md hover:border-primary/20 transition-all"
          >
            <s.icon className="w-5 h-5 text-primary mb-3" />
            <h3 className="font-semibold text-sm mb-1.5 group-hover:text-primary transition-colors">{s.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
          </Link>
        ))}
      </div>

      {/* Philosophy block */}
      <div className="rounded-xl bg-docs-section border border-border p-8">
        <h2 className="text-lg font-semibold mb-4">Философия интерфейса</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {principles.map((p, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center mt-0.5">{i + 1}</span>
              <p className="text-sm text-muted-foreground leading-relaxed">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
