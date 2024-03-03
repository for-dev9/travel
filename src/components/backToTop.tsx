'use client';

import { ThickArrowUpIcon } from '@radix-ui/react-icons';
import { useEffect, useRef, useState } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const prevScrollY = useRef(0);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  useEffect(() => {
    const checkWindowsPositiionY = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 600 && currentScrollY > prevScrollY.current) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      //console.log(currentScrollY + '-' + isVisible.toString());

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', checkWindowsPositiionY);

    return () => {
      window.removeEventListener('scroll', checkWindowsPositiionY);
    };
  }, []);

  return (
    isVisible && (
      <div
        onClick={scrollToTop}
        className="main-container fixed flex items-center rounded-full p-3 bg-orange-200 opacity-70 z-50 bottom-5 right-5 md:bottom-10 md:right-10"
      >
        <ThickArrowUpIcon className="w-5 h-5" />
      </div>
    )
  );
}
