import type { MarkdownHeading } from 'astro';
import type { FunctionalComponent } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';

const TableOfContents: FunctionalComponent<{ headings: MarkdownHeading[], showTitle?: boolean }> = ({
  headings = [],
  showTitle = true,
}) => {
  const onThisPageID = 'on-this-page-heading';
  const toc = useRef<HTMLDivElement>(null);
  const [currentID, setCurrentID] = useState('overview');

  useEffect(() => {
    if (!toc.current) return;

    const setCurrent: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const { id } = entry.target;
          if (id === onThisPageID) continue;
          setCurrentID(entry.target.id);
          break;
        }
      }
    };

    const observerOptions: IntersectionObserverInit = {
      rootMargin: '-100px 0% -66%',
      threshold: 1,
    };

    const headingsObserver = new IntersectionObserver(setCurrent, observerOptions);
    document.querySelectorAll('article :is(h1,h2,h3)').forEach((h) => headingsObserver.observe(h));

    return () => headingsObserver.disconnect();
  }, [toc.current]);

  const onLinkClick = (e: any) => {
    setCurrentID(e.target.getAttribute('href').replace('#', ''));
  };

  return (
    <>
      <h2 id={onThisPageID} className="uppercase font-bold text-xl mb-2 dark:text-white">
        {showTitle && 'En este artículo'}
      </h2>
      <div ref={toc} className="flex flex-col gap-2 mt-8">
        {headings
          .filter(({ depth }) => depth > 1 && depth < 4)
          .map((heading) => (
            <span key={heading.slug} className="flex items-center text-sm font-medium text-neutral-800 dark:text-neutral-300">
              <span className={`flex w-2.5 h-2.5 rounded-full me-3 flex-shrink-0 ${currentID === heading.slug ? 'bg-primary-400 dark:bg-primary-700' : 'bg-neutral-300 dark:bg-neutral-600'}`}></span>
              <a
                className={currentID === heading.slug ? 'active' : ''}
                href={`#${heading.slug}`}
                onClick={onLinkClick}
              >
                {heading.text}
              </a>
            </span>
          ))}
      </div>
    </>
  );
};

export default TableOfContents;