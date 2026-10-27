import { useEffect } from 'react';

/* ===============================
   PAGE TITLE, BODY CLASS & FADE-IN ANIMATION
=============================== */

export default function usePageSetup(title, bodyClass) {
  useEffect(() => {
    document.title = title;

    if (bodyClass) document.body.classList.add(bodyClass);

    const faders = document.querySelectorAll('.fade-in');
    let observer;

    if (faders.length > 0) {
      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      faders.forEach(el => observer.observe(el));
    }

    return () => {
      if (bodyClass) document.body.classList.remove(bodyClass);
      if (observer) observer.disconnect();
    };
  }, [title, bodyClass]);
}
