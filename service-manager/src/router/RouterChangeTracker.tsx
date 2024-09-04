import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const RouteChangeTracker = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  const GAInitializer = useCallback(() => {
    if (initialized) {
      ReactGA.set({ page: location.pathname });
      ReactGA.send('pageview');
    }
  }, [location, initialized]);

  useEffect(() => {
    if (import.meta.env.VITE_REACT_APP_GA_KEY) {
      ReactGA.initialize(import.meta.env.VITE_REACT_APP_GA_KEY);
      setInitialized(true);
    }
  }, []);

  useEffect(() => {
    GAInitializer();
  }, [GAInitializer]);

  return <></>;
};

export default RouteChangeTracker;
