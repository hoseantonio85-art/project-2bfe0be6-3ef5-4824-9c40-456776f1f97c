import ContentPage from "@/components/ContentPage";
import { WireframeBlock, WireframeContainer } from "@/components/WireframeBlock";

export default function ListPageAnatomy() {
  return (
    <ContentPage title="Анатомия страницы списка" subtitle="Из каких блоков собирается страница списка и зачем каждый из них.">
      <WireframeContainer label="Структура страницы списка">
        <WireframeBlock label="Хедер" className="bg-primary/5 border-primary/20">
          <span className="text-xs text-muted-foreground ml-2">— Заголовок, действия, breadcrumbs</span>
        </WireframeBlock>
        <WireframeBlock label="Навигация и фильтрация" muted>
          <span className="text-xs ml-2">— Табы, фильтры, поиск, сортировка</span>
        </WireframeBlock>
        <WireframeBlock label="Мини-аналитика / Summary" className="bg-accent border-accent-foreground/10">
          <span className="text-xs ml-2">— Ключевые числа, статусы, тренды</span>
        </WireframeBlock>
        <WireframeBlock label="Контентная зона" className="min-h-[80px] flex items-center justify-center">
          <span className="text-xs text-muted-foreground ml-2">— Таблица, карточки, список объектов</span>
        </WireframeBlock>
        <WireframeBlock label="Дополнительные блоки" muted>
          <span className="text-xs ml-2">— Пагинация, bulk-действия, экспорт</span>
        </WireframeBlock>
      </WireframeContainer>

      <h2 id="header">Хедер</h2>
      <p>
        Хедер — верхний блок страницы. Содержит заголовок (название раздела или сущности), 
        breadcrumbs для навигации и основные действия (создать, импортировать, настроить).
        Хедер всегда на месте — это точка ориентации.
      </p>

      <h2 id="navigation">Навигация и фильтрация</h2>
      <p>
        Под хедером — блок управления списком. Табы переключают между подмножествами данных 
        (например, «Все», «Активные», «Архив»). Фильтры позволяют сузить выборку. 
        Поиск — найти конкретный объект. Сортировка — упорядочить по нужному полю.
      </p>

      <h2 id="analytics">Мини-аналитика</h2>
      <p>
        Опциональный блок между фильтрами и основным списком. 
        Показывает агрегированные данные по текущей выборке: 
        количество, суммы, распределение по статусам, тренды. 
        Помогает пользователю понять картину без анализа каждой строки.
      </p>

      <h2 id="content">Контентная зона</h2>
      <p>
        Основная часть страницы — сами данные. 
        Может быть таблицей, карточками или другим представлением в зависимости от типа данных. 
        Каждая строка или карточка — это точка входа в объект.
      </p>

      <h2 id="extra">Дополнительные блоки</h2>
      <p>
        Пагинация, массовые действия, кнопки экспорта и другие элементы, 
        которые нужны не всегда, но должны быть доступны.
      </p>
    </ContentPage>
  );
}
