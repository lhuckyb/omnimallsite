import { useEffect } from 'react';

export const ScrollRevealEffects = () => {
  useEffect(() => {
    const root = document.querySelector('#main-content');
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const revealTargets = new Set<Element>();
    let observer: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            observer?.unobserve(entry.target);
            revealTargets.delete(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
      );
    }

    const observeContent = () => {
      revealTargets.forEach((element) => {
        if (element.isConnected) return;
        observer?.unobserve(element);
        revealTargets.delete(element);
      });
      root.querySelectorAll('section, article').forEach((element) => {
        if (revealTargets.has(element)) return;
        revealTargets.add(element);
        element.classList.add('scroll-reveal');
        if (observer) {
          observer.observe(element);
        } else {
          element.classList.add('is-visible');
          revealTargets.delete(element);
        }
      });
    };

    observeContent();
    const mutations = new MutationObserver(observeContent);
    mutations.observe(root, { childList: true, subtree: true });

    return () => {
      mutations.disconnect();
      observer?.disconnect();
      revealTargets.forEach((element) => {
        element.classList.remove('scroll-reveal', 'is-visible');
      });
      revealTargets.clear();
    };
  }, []);

  return null;
};
