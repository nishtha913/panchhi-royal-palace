import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/* ===============================
   GO TO TOP ON REFRESH / PAGE CHANGE
=============================== */

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname);
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
