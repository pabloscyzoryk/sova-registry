// imports
import { useEffect, type RefObject } from 'react';

const useNavbar = (navbarRef: RefObject<HTMLElement>) => {
  useEffect(() => {
    const navbar = navbarRef.current;
    const handleScroll = () => {
      if (navbar) {
        navbar.style.top = scrollY === 0 ? '0px' : `-${navbar.clientHeight}px`;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (navbar) {
        navbar.style.top =
          e.clientY <= navbar.clientHeight || scrollY === 0
            ? '0px'
            : `-${navbar.clientHeight}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [navbarRef]);
};

export default useNavbar;