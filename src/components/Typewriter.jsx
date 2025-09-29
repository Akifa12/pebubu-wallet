import React, { useState, useEffect } from 'react';

export default function TypeWriter({ 
    className,
  phrases, 
  typingSpeed = 100,
  delayBetweenPhrases = 2000 
}) {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < phrases[currentPhrase].length) {
          setCurrentText(phrases[currentPhrase].slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), delayBetweenPhrases);
        }
      } else {
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        } else {
          setCurrentText(currentText.slice(0, -1));
        }
      }
    }, isDeleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentPhrase, isDeleting, phrases, typingSpeed, delayBetweenPhrases]);

  return (
    <span className={` ${className} inline-flex`} >
      <span className="bg-gradient-to-r from-[#c084fc] to-pink-600 bg-clip-text text-transparent">
        {currentText}
      </span>
      <span className="caret" />
    </span>
  );
}