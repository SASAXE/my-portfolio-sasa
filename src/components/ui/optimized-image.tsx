import React, { useState, useRef, useEffect } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  style?: React.CSSProperties
  sizes?: string
  priority?: boolean
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  style = {},
  sizes = '100vw',
  priority = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Lazy loading with Intersection Observer
  useEffect(() => {
    if (priority) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [priority])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setHasError(true)
  }

  // Generate WebP and fallback sources
  const webpSrc = src.replace(/\.(png|jpg|jpeg)$/i, '.webp')
  const originalSrc = src

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ 
        aspectRatio: width && height ? `${width}/${height}` : undefined,
        ...style 
      }}
    >
      {/* Blur placeholder */}
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 animate-pulse"
          style={{
            backdropFilter: 'blur(20px)',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))'
          }}
        />
      )}

      {/* Optimized image with multiple formats */}
      {(isInView || priority) && !hasError && (
        <picture>
          {/* WebP format for modern browsers */}
          <source 
            srcSet={`${webpSrc} 1x, ${webpSrc.replace('.webp', '@2x.webp')} 2x`}
            type="image/webp"
          />
          
          {/* Fallback for older browsers */}
          <img
            ref={imgRef}
            src={originalSrc}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            onLoad={handleLoad}
            onError={handleError}
            className={`transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } w-full h-full object-cover`}
            sizes={sizes}
          />
        </picture>
      )}

      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-800">
          <span className="text-gray-500 text-sm">Image failed to load</span>
        </div>
      )}
    </div>
  )
}

export default OptimizedImage