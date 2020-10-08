import { useState, useEffect } from 'react';

/**
 * @function getWindowDimensions - custom hook which handles window resize events.
 *
 * @returns
 * @var windowDimensions - current window dimensions.
 */
function getWindowDimensions() {
  const { outerWidth: width, outerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
