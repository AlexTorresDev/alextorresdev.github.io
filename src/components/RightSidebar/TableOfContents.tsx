import type { MarkdownHeading } from 'astro';
import type { FunctionalComponent } from 'preact';
import { unescape } from 'html-escaper';
import { useState, useEffect, useRef } from 'preact/hooks';

type ItemOffsets = {
  id: string;
  topOffset: number;
};

interface TableOfContentsProps {
  headings: MarkdownHeading[];
  showTitle?: boolean;
}

const TableOfContents: FunctionalComponent<{ headings: MarkdownHeading[], showTitle?: boolean }> = ({
  headings = [],
  showTitle = true,
}) => {
  const toc = useRef<HTMLUListElement>(null);
  const onThisPageID = 'on-this-page-heading';
  const itemOffsets = useRef<ItemOffsets[]>([]);
  const [currentID, setCurrentID] = useState('overview');

  useEffect(() => {
    const getItemOffsets = () => {
      const titles = document.querySelectorAll('article :is(h1, h2, h3, h4)');
      itemOffsets.current = Array.from(titles).map((title) => ({
        id: title.id,
        topOffset: title.getBoundingClientRect().top + window.scrollY,
      }));
    };

    getItemOffsets();
    window.addEventListener('resize', getItemOffsets);

    return () => {
      window.removeEventListener('resize', getItemOffsets);
    };
  }, []);

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
      // Negative top margin accounts for `scroll-margin`.
      // Negative bottom margin means heading needs to be towards top of viewport to trigger intersection.
      rootMargin: '-100px 0% -66%',
      threshold: 1,
    };

    const headingsObserver = new IntersectionObserver(setCurrent, observerOptions);

    // Observe all the headings in the main page content.
    document.querySelectorAll('article :is(h1,h2,h3)').forEach((h) => headingsObserver.observe(h));

    // Stop observing when the component is unmounted.
    return () => headingsObserver.disconnect();
  }, [toc.current]);

  const onLinkClick = (e: any) => {
    setCurrentID(e.target.getAttribute('href').replace('#', ''));
  };

  return (
    <>
      <h2 id={onThisPageID} className="uppercase font-bold text-xl mb-2">
        {showTitle && 'En este artículo'}
      </h2>
      <ul ref={toc} className='menu menu-compact'>
        {headings
          .filter(({ depth }) => depth > 1 && depth < 4)
          .map((heading) => (
            <li key={heading.slug} >
              <a
                className={currentID === heading.slug ? 'active' : ''}
                href={`#${heading.slug}`}
                onClick={onLinkClick}
              >
                {unescape(heading.text)}
              </a>
            </li>
          ))}
      </ul>
    </>
  );
};

export default TableOfContents;
