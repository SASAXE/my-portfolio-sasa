import React from 'react';
import './css-split-text.css';

interface CSSAnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const CSSAnimatedText: React.FC<CSSAnimatedTextProps> = ({
  text,
  className = '',
  delay = 30
}) => {
  const words = text.split(' ');

  return (
    <div className={`css-animated-text inline-block ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="css-word">
          {word.split('').map((letter, letterIndex) => {
            const charIndex = words.slice(0, wordIndex).join('').length + 
                             wordIndex + letterIndex;
            
            return (
              <span
                key={`${wordIndex}-${letterIndex}`}
                className="css-letter"
                style={{
                  animationDelay: `${charIndex * delay}ms`
                }}
              >
                {letter}
              </span>
            );
          })}
          {wordIndex < words.length - 1 && (
            <span
              className="css-letter"
              style={{
                animationDelay: `${(words.slice(0, wordIndex + 1).join('').length + wordIndex) * delay}ms`
              }}
            >
              &nbsp;
            </span>
          )}
        </span>
      ))}
    </div>
  );
};

export default CSSAnimatedText;