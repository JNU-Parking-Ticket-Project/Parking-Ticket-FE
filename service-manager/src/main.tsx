import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import './main.css';
import ReactGA from 'react-ga4';

if (import.meta.env.VITE_REACT_APP_GA_KEY) {
  ReactGA.initialize(import.meta.env.VITE_REACT_APP_GA_KEY);
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
