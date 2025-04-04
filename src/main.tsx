
import React from 'react';  // Ensure React is imported
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Get the root element with proper type assertion
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

// Create root and render the app
createRoot(rootElement).render(<App />);
