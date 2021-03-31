import { useEffect, useCallback } from 'react';

export const useClickOutside = (element, clickHandler) => {
  const handleOutsideClick = useCallback(
    e => {
      if (element && !element.contains(e.target)) {
        clickHandler();
      }
    },
    [element, clickHandler],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handleOutsideClick]);
};
