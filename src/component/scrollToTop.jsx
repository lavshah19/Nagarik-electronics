import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to top on route change

    // Listen to the popstate event (for browser back/forward)
    const handlePopState = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);  // Cleanup the event listener
    };
  }, [location]);

  return null;
}

export default ScrollToTop;
