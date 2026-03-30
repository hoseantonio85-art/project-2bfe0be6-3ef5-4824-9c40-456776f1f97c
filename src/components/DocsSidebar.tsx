import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";

interface NavItem {
  title: string;
  path: string;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

const navigation: NavGroup[] = [
  {
    title: "Введение",
    items: [
      { title: "Зачем эта система", path: "/why" },
      { title: "Как читать этот сайт", path: "/how-to-read" },
      { title: "Основные принципы", path: "/principles" },
    ],
  },
  {
    title: "Основа проектирования",
    items: [
      { title: "Сначала данные, потом интерфейс", path: "/design/data-first" },
      { title: "Прогрессивное раскрытие", path: "/design/progressive-disclosure" },
      { title: "Модульность", path: "/design/modularity" },
      { title: "Смысл без усилий", path: "/design/interface-meaning" },
    ],
  },
  {
    title: "Типы страниц",
    items: [
      { title: "Обзор типов", path: "/pages/overview" },
      { title: "Страница списка", path: "/pages/list" },
      { title: "Страница объекта", path: "/pages/object" },
    ],
  },
  {
    title: "Анатомия экранов",
    items: [
      { title: "Страница списка", path: "/anatomy/list-page" },
      { title: "Экран объекта", path: "/anatomy/object-screen" },
      { title: "Мета и контент", path: "/anatomy/meta-content" },
    ],
  },
  {
    title: "Слои интерфейса",
    items: [
      { title: "Как устроены слои", path: "/layers" },
      { title: "Дровер", path: "/layers#drawer" },
      { title: "Модалка", path: "/layers#modal" },
      { title: "Вложенные сценарии", path: "/layers#nested" },
      { title: "Контекст и фокус", path: "/layers#context" },
    ],
  },
  {
    title: "Сценарии",
    items: [
      { title: "Из списка в объект", path: "/scenarios#list-to-object" },
      { title: "Быстрый просмотр", path: "/scenarios#quick-view" },
      { title: "Переход в действие", path: "/scenarios#action" },
      { title: "От summary к деталям", path: "/scenarios#summary-details" },
      { title: "Решение без перегруза", path: "/scenarios#decision" },
    ],
  },
  {
    title: "To-be",
    items: [
      { title: "Будущее состояние", path: "/future" },
      { title: "Примеры паттернов", path: "/future#patterns" },
      { title: "Куда система растёт", path: "/future#growth" },
    ],
  },
];

export default function DocsSidebar({ onNavigate }: { onNavigate?: () => void }) {
  const location = useLocation();
  const currentPath = location.pathname;

  const getBasePath = (path: string) => path.split("#")[0];

  const initialOpen = navigation.reduce<Record<string, boolean>>((acc, group) => {
    const isActive = group.items.some((item) => getBasePath(item.path) === currentPath);
    acc[group.title] = isActive || true;
    return acc;
  }, {});

  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(initialOpen);

  const toggleGroup = (title: string) => {
    setOpenGroups((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const isActive = (path: string) => {
    const base = getBasePath(path);
    return currentPath === base;
  };

  const handleClick = (path: string) => {
    if (path.includes("#")) {
      const hash = path.split("#")[1];
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    onNavigate?.();
  };

  return (
    <nav className="py-6 pr-4 pl-5 space-y-1">
      <Link
        to="/"
        onClick={onNavigate}
        className={`block px-3 py-2 rounded-md text-sm font-semibold mb-4 transition-colors ${
          currentPath === "/" ? "text-primary" : "text-foreground hover:text-primary"
        }`}
      >
        UX Handbook
      </Link>

      {navigation.map((group) => (
        <div key={group.title} className="mb-1">
          <button
            onClick={() => toggleGroup(group.title)}
            className="flex items-center w-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            {openGroups[group.title] ? (
              <ChevronDown className="w-3 h-3 mr-1.5" />
            ) : (
              <ChevronRight className="w-3 h-3 mr-1.5" />
            )}
            {group.title}
          </button>

          {openGroups[group.title] && (
            <div className="ml-2 mt-0.5 space-y-0.5 border-l border-border pl-3">
              {group.items.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => handleClick(item.path)}
                  className={`block px-2 py-1.5 text-[13px] rounded-md transition-colors ${
                    isActive(item.path)
                      ? "text-primary bg-accent font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
