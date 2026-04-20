import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const jobTitles = [
  "Softwere Deverloper",
  "IT&Network Security",
  "Data Analytics",
  "Graphic and Animation",
  "Project Manager"
];

const AnimatedHeadline = () => {
  const [index, setIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const changeWordInterval = setInterval(() => {
      setIsDeleting(true);
    }, 3000); 

    return () => clearInterval(changeWordInterval);
  }, [index]);

  useEffect(() => {
    const currentWord = jobTitles[index];

    const type = () => {
      setTypedText(currentWord.substring(0, typedText.length + 1));
      setTypingSpeed(100);
    };

    const erase = () => {
      setTypedText(currentWord.substring(0, typedText.length - 1));
      setTypingSpeed(50);
    };

    let timer;

    if (isDeleting) {
      if (typedText === '') {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
      } else {
        timer = setTimeout(erase, typingSpeed);
      }
    } else {
      if (typedText === currentWord) {
        // Wait before deleting (handled by the first useEffect)
      } else {
        timer = setTimeout(type, typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, index, typingSpeed]);

  return (
    <div className="relative h-20 -hidden flex justify-center items-center">
      <span
        className="text-center text-3xl md:text-5xl font-bold text-[#3FA2F6]"
      >
        {typedText}
        <motion.span
          className="inline-block w-1 bg-[#FAFFAF] h-full ml-1 align-bottom"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </span>
    </div>
  );
};

export default AnimatedHeadline;