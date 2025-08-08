"use client"

import React, { useRef, useEffect, useState } from 'react'

interface MatrixRainProps {
  className?: string
  density?: number
  speed?: number
  colors?: string[]
}

interface Drop {
  x: number
  y: number
  speed: number
  char: string
  opacity: number
  fontSize: number
  color: string
  glow: boolean
}

const MatrixRain: React.FC<MatrixRainProps> = ({
  className = "",
  density = 0.8,
  speed = 1,
  colors = ['#00ff41', '#00d4aa', '#0099cc', '#66ff66', '#00ffff']
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)
  const dropsRef = useRef<Drop[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  const numbers = '0123456789'

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || dimensions.width === 0 || dimensions.height === 0) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = dimensions.width
    canvas.height = dimensions.height

    const columnWidth = Math.max(18, Math.min(25, dimensions.width / 80))
    const columns = Math.floor(dimensions.width / columnWidth)

    const initializeDrops = () => {
      dropsRef.current = []
      for (let i = 0; i < columns * density; i++) {
        const column = Math.floor(Math.random() * columns)
        const x = column * columnWidth + Math.random() * (columnWidth - 10)
        
        const char = numbers[Math.floor(Math.random() * numbers.length)]

        dropsRef.current.push({
          x,
          y: Math.random() * -dimensions.height,
          speed: (Math.random() * 3 + 1) * speed,
          char,
          opacity: Math.random() * 0.5 + 0.3,
          fontSize: Math.random() * 8 + 14,
          color: colors[Math.floor(Math.random() * colors.length)],
          glow: Math.random() < 0.4
        })
      }
    }

    initializeDrops()

    const animate = () => {
      // Clear with slight trail effect for smoother animation
      ctx.fillStyle = 'rgba(0, 1, 17, 0.08)'
      ctx.fillRect(0, 0, dimensions.width, dimensions.height)

      dropsRef.current.forEach((drop, index) => {
        ctx.save()
        
        if (drop.glow) {
          ctx.shadowColor = drop.color
          ctx.shadowBlur = 15
        }

        const fadeDistance = 120
        const fadeStart = dimensions.height - fadeDistance
        let alpha = drop.opacity

        // Add slight brightness variation for depth effect
        if (drop.y < dimensions.height * 0.3) {
          alpha *= 0.9 + (drop.y / (dimensions.height * 0.3)) * 0.1
        }

        if (drop.y > fadeStart) {
          const fadeProgress = (drop.y - fadeStart) / fadeDistance
          alpha = alpha * (1 - fadeProgress)
        }

        ctx.globalAlpha = Math.max(0.1, alpha)
        ctx.fillStyle = drop.color
        ctx.font = `${drop.fontSize}px 'Courier New', monospace`
        ctx.fillText(drop.char, drop.x, drop.y)
        
        ctx.restore()

        drop.y += drop.speed

        if (Math.random() < 0.005) {
          drop.char = numbers[Math.floor(Math.random() * numbers.length)]
        }

        if (drop.y > dimensions.height + 50) {
          const column = Math.floor(Math.random() * columns)
          drop.x = column * columnWidth + Math.random() * (columnWidth - 10)
          drop.y = Math.random() * -200 - 50
          drop.speed = (Math.random() * 3 + 1) * speed
          drop.opacity = Math.random() * 0.5 + 0.3
          drop.fontSize = Math.random() * 8 + 14
          drop.color = colors[Math.floor(Math.random() * colors.length)]
          drop.glow = Math.random() < 0.4
          
          drop.char = numbers[Math.floor(Math.random() * numbers.length)]
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [dimensions, density, speed, colors])

  return (
    <div className={`fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none ${className}`} style={{ zIndex: -10 }}>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        width={dimensions.width}
        height={dimensions.height}
        style={{
          backgroundColor: '#000011',
          background: 'radial-gradient(ellipse at center, #001122 0%, #000000 70%)',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -10,
          width: '100vw',
          height: '100vh'
        }}
      />
    </div>
  )
}

interface MatrixBackgroundProps {
  className?: string
  density?: number
  speed?: number
  colors?: string[]
  children?: React.ReactNode
}

const MatrixBackground: React.FC<MatrixBackgroundProps> = ({
  className = "",
  density = 0.8,
  speed = 1,
  colors = ['#00ff41', '#00d4aa', '#0099cc', '#66ff66', '#00ffff'],
  children
}) => {
  return (
    <>
      <MatrixRain 
        className={className}
        density={density}
        speed={speed}
        colors={colors}
      />
      {children}
    </>
  )
}

export { MatrixBackground, MatrixRain }
export default MatrixBackground
