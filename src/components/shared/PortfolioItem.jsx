import { cn } from '@/lib/utils';
import Icon from './Icon';
import {
  ExpandableScreen,
  ExpandableScreenContent,
  ExpandableScreenTrigger,
} from '../ui/expandable-screen';
import {
  CutoutCard,
  CutoutCardMedia,
  CutoutCardImage,
  CutoutCardOverlay,
  CutoutCardContent,
  CutoutCardAction,
  CutoutCardPin,
  CutoutCorner,
  cutoutCardSurfaceClassName,
} from '../ui/cutout-card';
import { projectCategories } from '../../data/projects';

const CATEGORY_LABELS = Object.fromEntries(
  projectCategories.map((c) => [c.id, c.title])
);

const CATEGORY_SHORT = {
  web: 'WEB',
  ai: 'AI',
  devops: 'DEVOPS',
  mechatronics: 'MECHATRONICS',
};

export default function PortfolioItem({
  id,
  title,
  tagline,
  problem,
  solution,
  result,
  stack,
  image,
  links,
  fit,
  bg,
  category,
}) {
  const imgStyle = { ...(fit ? { objectFit: fit } : {}), ...(bg ? { background: bg } : {}) };
  const categoryLabel = CATEGORY_LABELS[category] || category;
  const categoryShort = CATEGORY_SHORT[category] || categoryLabel;

  return (
    <ExpandableScreen
      layoutId={`portfolio-${id}`}
      triggerRadius="28px"
      contentRadius="24px"
      animationDuration={0.35}
    >
      <ExpandableScreenTrigger className="h-full" surfaceClassName="bg-card border border-border/80">
        <CutoutCard className={cn(cutoutCardSurfaceClassName, 'h-full')}>
          <CutoutCardMedia className="aspect-[16/9]">
            <CutoutCardImage src={image} alt={`${title} — captura`} fill style={imgStyle} />
            <CutoutCardOverlay />

            <CutoutCardPin className="left-4 top-4">
              <div className="flex items-center rounded-lg bg-background/80 py-1 pl-3 pr-2 text-[0.7rem] font-semibold uppercase tracking-widest text-foreground backdrop-blur-sm">
                {categoryShort}
                <CutoutCorner className="ml-2 h-4 w-4 text-background/80" size={14} />
              </div>
            </CutoutCardPin>

            <CutoutCardAction className="bottom-4 right-4 flex items-center gap-2 rounded-full bg-cta px-4 py-2 text-sm font-semibold text-cta-foreground shadow-lg">
              <Icon name="chevron-right" className="h-4 w-4" />
              Ver caso
            </CutoutCardAction>
          </CutoutCardMedia>

          <CutoutCardContent className="flex flex-1 flex-col gap-2 p-5">
            <h3 className="text-lg font-bold leading-tight text-card-foreground">{title}</h3>
            <p className="text-sm leading-relaxed text-tagline">{tagline}</p>

            {stack && stack.length > 0 && (
              <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
                {stack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border px-3 py-1 text-xs text-card-foreground"
                  >
                    {tech}
                  </span>
                ))}
                {stack.length > 3 && (
                  <span
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    aria-label={`+${stack.length - 3} more technologies`}
                  >
                    +{stack.length - 3}
                  </span>
                )}
              </div>
            )}
          </CutoutCardContent>
        </CutoutCard>
      </ExpandableScreenTrigger>

      <ExpandableScreenContent className="border border-border/60 bg-card text-card-foreground">
        <div className="mx-auto w-full max-w-5xl px-5 pb-10 pt-16 sm:px-10 sm:pt-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-tagline">
            {categoryLabel}
          </p>
          <h3 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">{title}</h3>
          {tagline && <p className="mt-3 text-base text-tagline sm:text-lg">{tagline}</p>}

          <div className="mt-8 overflow-hidden rounded-2xl border border-border/50">
            <img
              src={image}
              alt={`${title} — captura`}
              className="max-h-[420px] w-full object-cover"
              style={imgStyle}
            />
          </div>

          {(problem || solution || result) && (
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {problem && (
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-widest text-tagline">
                    Problema
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-card-foreground">{problem}</p>
                </div>
              )}
              {solution && (
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-widest text-tagline">
                    Solución
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-card-foreground">{solution}</p>
                </div>
              )}
              {result && (
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-widest text-tagline">
                    Resultado
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-card-foreground">{result}</p>
                </div>
              )}
            </div>
          )}

          {stack && stack.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border px-3.5 py-1.5 text-sm text-card-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {links && links.length > 0 && (
            <div className="mt-10 flex flex-wrap justify-center gap-3 border-t border-border/40 pt-8">
              {links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="main-btn"
                >
                  <span className="btn-text">{link.label}</span>
                  <span className="btn-icon">
                    <Icon name={link.icon} />
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>
      </ExpandableScreenContent>
    </ExpandableScreen>
  );
}