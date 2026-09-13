import { useState, useEffect, useRef } from 'react';
import PortfolioItem from './PortfolioItem';
import Icon from './Icon';

const BREAKPOINTS = [
  { mq: '(max-width: 660px)', size: 1 },
  { mq: '(max-width: 1250px)', size: 2 },
  { mq: null, size: 3 }, // desktop default
];

function getPageSize() {
  for (const b of BREAKPOINTS) {
    if (b.mq && window.matchMedia?.(b.mq).matches) return b.size;
  }
  return BREAKPOINTS[BREAKPOINTS.length - 1].size;
}

export default function ProjectCarousel({ projects }) {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(() => (typeof window === 'undefined' ? 3 : getPageSize()));
  const trackRef = useRef(null);

  // Reactive PAGE_SIZE via matchMedia
  useEffect(() => {
    const mqs = BREAKPOINTS.filter((b) => b.mq).map((b) => window.matchMedia(b.mq));
    if (!mqs.every((mq) => mq?.addEventListener)) return;

    const handler = () => setPageSize(getPageSize());
    handler(); // set initial value
    mqs.forEach((mq) => mq.addEventListener('change', handler));
    return () => mqs.forEach((mq) => mq.removeEventListener('change', handler));
  }, []);

  // Chunk projects into pages based on pageSize
  const pages = [];
  for (let i = 0; i < projects.length; i += pageSize) {
    pages.push(projects.slice(i, i + pageSize));
  }
  const pageCount = pages.length;

  // Clamp page when pageSize shrinks (e.g. desktop → mobile)
  useEffect(() => {
    if (pageCount === 0) return;
    setPage((prev) => (prev >= pageCount ? pageCount - 1 : prev));
  }, [pageCount]);

  if (projects.length === 0) return null;

  const isDesktop = pageSize > 1;

  const goToPrev = () => {
    const track = trackRef.current;
    if (!isDesktop && track && track.scrollWidth > track.clientWidth + 1) {
      const firstPage = track.querySelector('.carousel-page');
      if (firstPage) {
        const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
        track.scrollBy({ left: -firstPage.offsetWidth, behavior: prefersReduced ? 'auto' : 'smooth' });
      }
    } else {
      setPage((p) => Math.max(0, p - 1));
    }
  };

  const goToNext = () => {
    const track = trackRef.current;
    if (!isDesktop && track && track.scrollWidth > track.clientWidth + 1) {
      const firstPage = track.querySelector('.carousel-page');
      if (firstPage) {
        const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
        track.scrollBy({ left: firstPage.offsetWidth, behavior: prefersReduced ? 'auto' : 'smooth' });
      }
    } else {
      setPage((p) => Math.min(pageCount - 1, p + 1));
    }
  };

  return (
    <div className="project-carousel">
      <div className="carousel-side">
        {pageCount > 1 && isDesktop && (
          <button
            type="button"
            className={`carousel-arrow carousel-arrow--left${page === 0 ? ' carousel-arrow--disabled' : ''}`}
            onClick={goToPrev}
            disabled={page === 0}
            aria-label="Previous projects"
          >
            {page !== 0 && (
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 animate-sonar rounded-full border-2 border-primary/60"
              />
            )}
            <Icon name="chevron-left" />
          </button>
        )}

        <div className="carousel-viewport">
          <div
            ref={trackRef}
            className="carousel-track"
            style={isDesktop ? { transform: `translateX(-${page * 100}%)` } : undefined}
          >
            {pages.map((pageProjects, i) => (
              <div className="carousel-page" key={i}>
                <div className="portfolios">
                  {pageProjects.map((project) => (
                    <PortfolioItem key={project.id} {...project} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {pageCount > 1 && isDesktop && (
          <button
            type="button"
            className={`carousel-arrow carousel-arrow--right${page === pageCount - 1 ? ' carousel-arrow--disabled' : ''}`}
            onClick={goToNext}
            disabled={page === pageCount - 1}
            aria-label="Next projects"
          >
            {page !== pageCount - 1 && (
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 animate-sonar rounded-full border-2 border-primary/60"
              />
            )}
            <Icon name="chevron-right" />
          </button>
        )}
      </div>

      {pageCount > 1 && (
        <div className="carousel-dots" role="tablist" aria-label="Project pages">
          {pages.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`carousel-dot${i === page ? ' carousel-dot--active' : ''}`}
              onClick={() => setPage(i)}
              role="tab"
              aria-selected={i === page}
              aria-label={`Page ${i + 1} of ${pageCount}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
