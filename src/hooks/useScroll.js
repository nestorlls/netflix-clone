import { useEffect, useState } from 'react';

const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(0);

  useEffect(() => {
    const scroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(1);
      } else {
        setIsScrolled(0);
      }
    };

    window.addEventListener('scroll', scroll);
    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, []);

  return { isScrolled };
};

export default useScroll;
