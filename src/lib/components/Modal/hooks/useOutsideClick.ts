import { useEffect } from 'react';

export const useOutsideClick = <T extends HTMLElement>(
  element: T | null | undefined,
  callback: (event: MouseEvent) => void
) => {
  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      if (!(event.target instanceof HTMLElement)) {
        return;
      }

      if (!element?.contains(event.target)) {
        callback(event);
      }
    };

    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [element, callback]);
};
