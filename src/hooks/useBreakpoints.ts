import { useMediaQuery } from 'react-responsive';

export const useBreakpoints = () => {
  const isMobile = useMediaQuery({ query: '(min-width: 310px)' });

  const isTablet = useMediaQuery({ query: '(min-width: 760px)' });

  const isLaptop = useMediaQuery({ query: '(min-width: 1400px)' });

  return {
		isMobile,
		isTablet,
		isLaptop,
  };
};