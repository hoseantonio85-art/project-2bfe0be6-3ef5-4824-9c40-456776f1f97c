import ContentPage from "@/components/ContentPage";
import { Link } from "react-router-dom";

export default function PageTypesOverview() {
  return (
    <ContentPage title="Обзор типов страниц" subtitle="Четыре основных типа экранов в продукте.">
      <p>
        Каждый экран в продукте относится к одному из четырёх типов. 
        Тип определяет структуру, набор блоков и задачу, которую экран решает.
      </p>

      <div className="grid gap-4 my-8 not-prose">
        {[
          { title: "Страница списка", desc: "Показывает коллекцию объектов. Помогает увидеть картину, отфильтровать и выбрать нужное.", path: "/pages/list", color: "bg-primary/5 border-primary/20" },
          { title: "Страница объекта", desc: "Раскрывает один объект: его суть, мету, контент и связи.", path: "/pages/object", color: "bg-accent border-accent-foreground/10" },
          { title: "Сводка / Dashboard", desc: "Агрегирует данные из разных источников. Даёт общую картину без погружения в детали.", color: "bg-secondary border-secondary-foreground/10" },
          { title: "Форма", desc: "Собирает данные от пользователя: создание, редактирование, настройка.", color: "bg-muted border-border" },
        ].map((item) => (
          <div key={item.title} className={`rounded-xl border p-5 ${item.color}`}>
            <h3 className="font-semibold text-sm mb-1.5">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            {item.path && (
              <Link to={item.path} className="inline-block mt-2 text-xs text-primary font-medium hover:underline">
                Подробнее →
              </Link>
            )}
          </div>
        ))}
      </div>

      <h2 id="dashboard">Сводка / Dashboard</h2>
      <p>
        Dashboard — это экран, который агрегирует ключевые метрики и сигналы из разных частей системы. 
        Его задача — дать пользователю общую картину: что происходит, что требует внимания, 
        где есть отклонения от нормы.
      </p>
      <p>
        Dashboard не заменяет списки и объекты — он служит точкой входа, 
        откуда пользователь переходит к конкретным данным.
      </p>

      <h2 id="form">Форма</h2>
      <p>
        Форма — это экран для ввода или редактирования данных. 
        Формы могут открываться как отдельная страница, модалка или дровер — 
        в зависимости от сложности и контекста. 
        Ключевое требование: форма должна быть понятной без инструкций.
      </p>
    </ContentPage>
  );
}
