'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

// ============================================================================
// Context
// ============================================================================

const ExpandableScreenContext = createContext(null);

function useExpandableScreen() {
  const context = useContext(ExpandableScreenContext);
  if (!context) {
    throw new Error('useExpandableScreen must be used within an ExpandableScreen');
  }
  return context;
}

// ============================================================================
// Root
// ============================================================================

export function ExpandableScreen({
  children,
  defaultExpanded = false,
  onExpandChange,
  layoutId = 'expandable-card',
  triggerRadius = '100px',
  contentRadius = '24px',
  animationDuration = 0.3,
  lockScroll = true,
}) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const expand = () => {
    setIsExpanded(true);
    onExpandChange?.(true);
  };

  const collapse = () => {
    setIsExpanded(false);
    onExpandChange?.(false);
  };

  useEffect(() => {
    if (lockScroll) {
      if (isExpanded) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    }
  }, [isExpanded, lockScroll]);

  useEffect(() => {
    if (!isExpanded) return;
    const onKey = (e) => {
      if (e.key === 'Escape') collapse();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isExpanded, onExpandChange]);

  return (
    <ExpandableScreenContext.Provider
      value={{
        isExpanded,
        expand,
        collapse,
        layoutId,
        triggerRadius,
        contentRadius,
        animationDuration,
      }}
    >
      {children}
    </ExpandableScreenContext.Provider>
  );
}

// ============================================================================
// Trigger
// ============================================================================

export function ExpandableScreenTrigger({ children, className = '', surfaceClassName = '' }) {
  const { isExpanded, expand, layoutId, triggerRadius } = useExpandableScreen();

  return (
    <AnimatePresence initial={false}>
      {!isExpanded && (
        <motion.div className={`relative ${className}`}>
          {/* Background layer with shared layoutId for morphing */}
          <motion.div
            style={{ borderRadius: triggerRadius }}
            layout
            layoutId={layoutId}
            className={`absolute inset-0 transform-gpu will-change-transform ${surfaceClassName}`}
          />
          {/* Content layer that fades out on expand */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            exit={{ opacity: 0, scale: 0.8 }}
            layout={false}
            onClick={expand}
            className="relative h-full w-full cursor-pointer"
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ============================================================================
// Content
// ============================================================================

export function ExpandableScreenContent({
  children,
  className = '',
  showCloseButton = true,
  closeButtonClassName = '',
}) {
  const { isExpanded, collapse, layoutId, contentRadius, animationDuration } =
    useExpandableScreen();

  return typeof document === 'undefined'
    ? null
    : createPortal(
        <>
          <AnimatePresence initial={false}>
            {isExpanded && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-2">
                {/* Morphing background with shared layoutId */}
                <motion.div
                  layout
                  layoutId={layoutId}
                  transition={{ duration: animationDuration }}
                  style={{ borderRadius: contentRadius }}
                  className={`relative flex h-full w-full overflow-y-auto transform-gpu will-change-transform ${className}`}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.4 }}
                    className="relative z-20 w-full"
                  >
                    {children}
                  </motion.div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

          {showCloseButton && isExpanded && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.12 }}
              transition={{ delay: 0.25, duration: 0.25 }}
              onClick={collapse}
              className={`group fixed right-4 top-4 z-[60] flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-primary/40 bg-background/80 text-foreground shadow-[0_0_12px_rgba(39,174,96,0.25)] backdrop-blur-sm transition-colors duration-300 hover:border-primary hover:bg-secondary hover:text-secondary-foreground hover:shadow-[0_0_20px_rgba(39,174,96,0.5)] ${
                closeButtonClassName || ''
              }`}
              aria-label="Close"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 animate-sonar rounded-full border-2 border-primary/60"
              />
              <X className="relative h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />
            </motion.button>
          )}
        </>,
        document.body
      );
}

// ============================================================================
// Background (opcional)
// ============================================================================

export function ExpandableScreenBackground({ trigger, content, className = '' }) {
  const { isExpanded } = useExpandableScreen();

  if (isExpanded && content) {
    return <div className={className}>{content}</div>;
  }

  if (!isExpanded && trigger) {
    return <div className={className}>{trigger}</div>;
  }

  return null;
}

export { useExpandableScreen };