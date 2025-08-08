import { onCLS, onFCP, onINP, onLCP, onTTFB } from 'web-vitals';

// Web Vitals reporting function
export function sendToAnalytics(metric: any) {
  // In production, you would send these to your analytics service
  // For now, we'll just log them to console
  console.log(`[Web Vitals] ${metric.name}: ${metric.value} (${metric.rating})`);
  
  // Example: Send to Google Analytics 4
  // gtag('event', metric.name, {
  //   value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
  //   event_category: 'Web Vitals',
  //   event_label: metric.id,
  //   non_interaction: true,
  // });
}

// Initialize Web Vitals monitoring
export function initPerformanceMonitoring() {
  // Core Web Vitals
  onCLS(sendToAnalytics);  // Cumulative Layout Shift
  onINP(sendToAnalytics);  // Interaction to Next Paint (replaces FID)
  onLCP(sendToAnalytics);  // Largest Contentful Paint
  
  // Additional metrics
  onFCP(sendToAnalytics);  // First Contentful Paint
  onTTFB(sendToAnalytics); // Time to First Byte
}

// Performance monitoring for development
export function logPerformanceMetrics() {
  if (typeof window === 'undefined') return;
  
  // Wait for page load to complete
  window.addEventListener('load', () => {
    setTimeout(() => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        console.group('🚀 Performance Metrics');
        console.log('DOM Content Loaded:', `${Math.round(navigation.domContentLoadedEventEnd - navigation.navigationStart)}ms`);
        console.log('Page Load Complete:', `${Math.round(navigation.loadEventEnd - navigation.navigationStart)}ms`);
        console.log('DNS Lookup:', `${Math.round(navigation.domainLookupEnd - navigation.domainLookupStart)}ms`);
        console.log('TCP Connection:', `${Math.round(navigation.connectEnd - navigation.connectStart)}ms`);
        console.log('Request Time:', `${Math.round(navigation.responseEnd - navigation.requestStart)}ms`);
        console.groupEnd();
      }

      // Log resource loading performance
      const resources = performance.getEntriesByType('resource');
      const jsResources = resources.filter(r => r.name.includes('.js'));
      const cssResources = resources.filter(r => r.name.includes('.css'));
      
      if (jsResources.length > 0) {
        console.group('📦 JavaScript Bundle Loading');
        jsResources.forEach(resource => {
          const size = 'transferSize' in resource ? (resource as any).transferSize : 'N/A';
          console.log(`${resource.name.split('/').pop()}: ${Math.round(resource.duration)}ms (${size ? `${(size/1024).toFixed(1)}KB` : 'N/A'})`);
        });
        console.groupEnd();
      }
      
      if (cssResources.length > 0) {
        console.group('🎨 CSS Loading');
        cssResources.forEach(resource => {
          const size = 'transferSize' in resource ? (resource as any).transferSize : 'N/A';
          console.log(`${resource.name.split('/').pop()}: ${Math.round(resource.duration)}ms (${size ? `${(size/1024).toFixed(1)}KB` : 'N/A'})`);
        });
        console.groupEnd();
      }
    }, 1000);
  });
}