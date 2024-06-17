import { useEffect } from 'react';

export const useKeyDown = (
  eventKey: string,
  callback: (event: KeyboardEvent) => void
) => {
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === eventKey) {
        callback(event);
      }
    };

    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  });
};
