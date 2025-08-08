import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initPerformanceMonitoring, logPerformanceMetrics } from './utils/performance'

// Initialize performance monitoring
initPerformanceMonitoring();

// Log performance metrics in development
if (import.meta.env.DEV) {
  logPerformanceMetrics();
}

createRoot(document.getElementById("root")!).render(<App />);
