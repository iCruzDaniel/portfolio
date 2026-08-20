import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import certificates from '../../data/certificates';
import Icon from './Icon';

const GRID_LIMIT = 4;

function CertImage({ src, alt }) {
  return (
    <img src={src} alt={alt} loading="lazy" />
  );
}

export default function CertPopup({ skillName, onClose }) {
  const [showAll, setShowAll] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const modalRef = useRef(null);
  const previousFocusRef = useRef(null);

  // Normalize imageUrl to array
  const images = useMemo(() => {
    if (!skillName) return [];
    const cert = certificates[skillName];
    if (!cert || !cert.imageUrl) return [];
    if (Array.isArray(cert.imageUrl)) return cert.imageUrl;
    return [cert.imageUrl];
  }, [skillName]);

  const hasCerts = images.length > 0;
  const isSingle = images.length === 1;
  const overflowsGrid = images.length > GRID_LIMIT;
  const visibleImages = overflowsGrid && !showAll
    ? images.slice(0, GRID_LIMIT - 1)
    : images;
  const overflowCount = overflowsGrid ? images.length - (GRID_LIMIT - 1) : 0;

  // Focus trap
  useEffect(() => {
    if (!skillName) return;
    previousFocusRef.current = document.activeElement;
    const modal = modalRef.current;
    if (modal) {
      const focusable = modal.querySelector('button');
      if (focusable) focusable.focus();
    }
    return () => {
      if (previousFocusRef.current && previousFocusRef.current.focus) {
        previousFocusRef.current.focus();
      }
    };
  }, [skillName]);

  const selectCert = useCallback((index) => {
    setSelectedIndex(index);
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      onClose();
      return;
    }
    if (e.key === 'Tab' && modalRef.current) {
      const focusableEls = modalRef.current.querySelectorAll(
        'button, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusableEls[0];
      const last = focusableEls[focusableEls.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  }, [onClose]);

  const toggleShowAll = useCallback(() => {
    setShowAll((prev) => !prev);
  }, []);

  if (!skillName) return null;

  const cert = certificates[skillName];
  if (!cert) return null;

  return (
    <>
      <div
        className="popup-overlay"
        style={{ display: 'block' }}
        onClick={onClose}
      />
      <div
        className="popup-modal"
        style={{ display: 'block' }}
        role="dialog"
        aria-modal="true"
        aria-label={`Certificate: ${skillName}`}
        ref={modalRef}
        onKeyDown={handleKeyDown}
      >
        <button className="popup-close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <div className="popup-title">{skillName}</div>

        {!hasCerts ? (
          <div className="popup-desc">
            <Icon name="bug" />
            No disponible.
          </div>
        ) : isSingle ? (
          <div className="cert-single">
            <CertImage src={images[0]} alt={skillName} />
          </div>
        ) : selectedIndex !== null ? (
          /* ─── Expanded Certificate View ─── */
          <div className="cert-expanded">
            <button
              className="cert-list-back"
              onClick={() => setSelectedIndex(null)}
              aria-label="Back to grid"
            >
              <Icon name="chevron-left" /> Grid
            </button>
            <div className="cert-single">
              <CertImage
                src={images[selectedIndex]}
                alt={`${skillName} certificate ${selectedIndex + 1}`}
              />
            </div>
          </div>
        ) : showAll ? (
          /* ─── List View ─── */
          <div className="cert-list">
            <button
              className="cert-list-back"
              onClick={toggleShowAll}
              aria-label="Back to grid view"
            >
              <Icon name="chevron-left" /> Grid
            </button>
            {images.map((url, i) => (
              <div className="cert-list-item" key={`${skillName}-cert-${i}`}>
                <CertImage src={url} alt={`${skillName} certificate ${i + 1}`} />
              </div>
            ))}
          </div>
        ) : (
          /* ─── Mosaic Grid View ─── */
          <div className="cert-grid">
            {visibleImages.map((url, i) => (
              <button
                className="cert-grid-item"
                key={`${skillName}-cert-${i}`}
                onClick={() => selectCert(i)}
                aria-label={`Expand ${skillName} certificate ${i + 1}`}
              >
                <CertImage src={url} alt={`${skillName} certificate ${i + 1}`} />
              </button>
            ))}
            {overflowsGrid && (
              <button
                className="cert-grid-item cert-more-badge"
                onClick={toggleShowAll}
                tabIndex={0}
                aria-label={`View all ${images.length} certificates`}
              >
                +{overflowCount}
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
}
