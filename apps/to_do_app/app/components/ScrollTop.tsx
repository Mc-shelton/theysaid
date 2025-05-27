import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import type { ReactProps } from '@theysaid/shared-types';


const ScrollTop = (props:ReactProps) => {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return props.children || null;
};

export default ScrollTop;
