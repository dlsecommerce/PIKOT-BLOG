"use client";

import { useEffect, useState } from "react";
import { List } from "lucide-react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

export const TableOfContents = ({ content }: TableOfContentsProps) => {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (!content) return;

    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const headingElements = doc.querySelectorAll("h2, h3");

    const items: TocItem[] = Array.from(headingElements).map((heading, index) => ({
      id: `heading-${index}`,
      text: heading.textContent || "",
      level: heading.tagName === "H2" ? 2 : 3,
    }));

    setHeadings(items);
  }, [content]);

  // ScrollSpy (IntersectionObserver)
  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -70% 0px" }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 100;
    const elementPosition = element.getBoundingClientRect().top;
    const finalPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: finalPosition,
      behavior: "smooth",
    });
  };

  if (headings.length === 0) return null;

  return (
    <nav className="bg-muted/50 rounded-lg p-4 mb-8 sticky top-24">
      <div className="flex items-center gap-2 mb-3">
        <List className="h-5 w-5 text-primary" />
        <h2 className="font-display font-bold text-lg">Índice</h2>
      </div>

      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.id} className={heading.level === 3 ? "ml-4" : ""}>
            <button
              onClick={() => scrollToHeading(heading.id)}
              className={`text-left text-sm block w-full transition-colors hover:text-primary ${
                activeId === heading.id
                  ? "text-primary font-medium"
                  : "text-muted-foreground"
              }`}
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// ➤ Helper para adicionar IDs em headings (para usar antes de renderizar)
export const addHeadingIds = (content: string): string => {
  if (!content) return content;

  const parser = new DOMParser();
  const doc = parser.parseFromString(content, "text/html");
  const headings = doc.querySelectorAll("h2, h3");

  headings.forEach((heading, index) => {
    heading.id = `heading-${index}`;
  });

  return doc.body.innerHTML;
};
