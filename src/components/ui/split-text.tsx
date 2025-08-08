import { useEffect, useRef, useState } from 'react';
import './split-text.css';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  loop?: boolean;
  loopInterval?: number;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 30,
  loop = true,
  loopInterval = 2000,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const animationTimeout = useRef<NodeJS.Timeout>();
  const loopTimeout = useRef<NodeJS.Timeout>();

  // Split text into words and letters
  const words = text.split(' ').map((word, i, arr) => ({
    letters: word.split(''),
    hasSpace: i < arr.length - 1, // Add space after all words except the last one
  }));

  // Handle intersection observer for scroll animation
  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    observer.observe(currentRef);
    return () => {
      observer.unobserve(currentRef);
      observer.disconnect();
    };
  }, []);

  // Handle animation loop
  useEffect(() => {
    if (!isVisible) return;

    const startAnimation = () => {
      setIsAnimating(true);
      
      // Calculate total animation duration
      const totalDuration = text.length * delay + 1000; // Extra second for the last letter
      
      // Set timeout to reset and restart animation if loop is enabled
      if (loop) {
        loopTimeout.current = setTimeout(() => {
          setIsAnimating(false);
          
          // Small delay before restarting animation
          setTimeout(() => {
            if (isVisible) {
              startAnimation();
            }
          }, 300);
          
        }, totalDuration + loopInterval);
      }
    };

    startAnimation();

    return () => {
      if (animationTimeout.current) clearTimeout(animationTimeout.current);
      if (loopTimeout.current) clearTimeout(loopTimeout.current);
    };
  }, [isVisible, loop, loopInterval, delay, text.length]);

  // Generate animation delay for each letter
  const getLetterStyle = (wordIndex: number, letterIndex: number): React.CSSProperties => {
    if (!isAnimating) return {};
    
    // Calculate the overall index of the letter
    let charIndex = 0;
    for (let i = 0; i < wordIndex; i++) {
      charIndex += words[i].letters.length + (words[i].hasSpace ? 1 : 0);
    }
    charIndex += letterIndex;
    
    const animationDelay = `${charIndex * delay}ms`;
    
    return {
      opacity: 0,
      transform: 'translateY(20px)',
      animation: `fadeInUp 0.5s ${animationDelay} forwards`,
      display: 'inline-block',
      whiteSpace: 'pre' as const,
    };
  };

  return (
    <div ref={ref} className={`split-text-container inline-block ${className}`}>
      <div className="inline-block">
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {word.letters.map((letter, letterIndex) => (
              <span 
                key={`${wordIndex}-${letterIndex}`}
                style={getLetterStyle(wordIndex, letterIndex)}
                className="inline-block"
              >
                {letter}
              </span>
            ))}
            {word.hasSpace && (
              <span 
                className="inline-block w-2"
                style={getLetterStyle(wordIndex, word.letters.length)}
              />
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SplitText;
