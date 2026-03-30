import ContentPage from "@/components/ContentPage";
import { WireframeBlock, WireframeContainer } from "@/components/WireframeBlock";

export default function ObjectScreenAnatomy() {
  return (
    <ContentPage title="Анатомия экрана объекта" subtitle="Как устроен экран или модалка одного объекта.">
      <WireframeContainer label="Структура экрана объекта">
        <WireframeBlock label="Хедер" className="bg-primary/5 border-primary/20">
          <span className="text-xs text-muted-foreground ml-2">— Название, статус, ключевые действия</span>
        </WireframeBlock>
        <div className="grid grid-cols-3 gap-2">
          <WireframeBlock label="Мета" className="col-span-1 bg-accent border-accent-foreground/10">
            <span className="text-xs block mt-1">Тип, владелец, даты, теги</span>
          </WireframeBlock>
          <WireframeBlock label="Контент" className="col-span-2 min-h-[100px]">
            <span className="text-xs block mt-1 text-muted-foreground">Суть объекта, описание, ключевые данные</span>
          </WireframeBlock>
        </div>
        <WireframeBlock label="Связи, история, источники, AI" muted>
          <span className="text-xs ml-2">— Связанные объекты, лог изменений, рекомендации</span>
        </WireframeBlock>
      </WireframeContainer>

      <h2 id="header">Хедер</h2>
      <p>
        Название объекта, его статус (бейдж), кнопки действий (редактировать, архивировать, удалить). 
        Хедер даёт ответ на вопрос «что это?» за долю секунды.
      </p>

      <h2 id="meta">Мета</h2>
      <p>
        Метаинформация отвечает на вопрос «что это за объект?»: тип, владелец, дата создания, 
        теги, категория, приоритет. Мета обычно располагается в боковой панели или 
        компактном блоке — она важна, но не главная.
      </p>

      <h2 id="content">Контент</h2>
      <p>
        Контент отвечает на вопрос «что здесь происходит и что мне с этим делать?». 
        Это основная часть экрана: описание, ключевые данные, таблицы, графики, 
        текстовые блоки — всё, что составляет суть объекта.
      </p>

      <h2 id="relations">Связи, история, источники, AI</h2>
      <p>
        Дополнительные блоки, которые обогащают понимание объекта: 
        связанные сущности, история изменений, источники данных, 
        AI-рекомендации. Эти блоки доступны, но не перегружают первый экран.
      </p>
    </ContentPage>
  );
}
