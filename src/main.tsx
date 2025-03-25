
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Create root outside of React.StrictMode to reduce duplicate renders
createRoot(document.getElementById("root")!).render(
  <App />
);
