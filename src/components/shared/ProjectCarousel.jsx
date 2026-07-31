import { useState, useEffect, useRef } from 'react';
import PortfolioItem from './PortfolioItem';

const DESKTOP_PAGE_SIZE = 3;

export default function ProjectCarousel({ projects }) {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(DESKTOP_PAGE_SIZE);
  const trackRef = useRef(null);

  // Reactive PAGE_SIZE via matchMedia
  useEffect(() => {
    const mq = window.matchMedia?.('(max-width: 660px)');
    if (!mq?.addEventListener) return;

    const handler = (e) => setPageSize(e.matches ? 1 : DESKTOP_PAGE_SIZE);
    handler(mq); // set initial value
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
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
            <i className="fas fa-chevron-left"></i>
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
            <i className="fas fa-chevron-right"></i>
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
