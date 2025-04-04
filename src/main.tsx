
import React from 'react';  // Explicit React import
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Get the root element with proper type assertion
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

// Create root and render the app
createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
