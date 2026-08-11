import React, { useEffect, useRef, useState } from 'react';

/**
 * Renders children only once the placeholder enters (or nears) the viewport.
 * Keeps first paint light by deferring below-fold sections.
 */
const LazyMount = ({ children, rootMargin = '200px 0px', minHeight = 1, className = '' }) => {
  const ref = useRef(null);
  const isPrerender =
    typeof navigator !== 'undefined' &&
    /ReactSnap|HeadlessChrome/i.test(navigator.userAgent);
  const [visible, setVisible] = useState(isPrerender);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, visible]);

  return (
    <div ref={ref} className={className} style={visible ? undefined : { minHeight }}>
      {visible ? children : null}
    </div>
  );
};

export default LazyMount;
