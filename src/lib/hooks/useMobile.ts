import { useEffect, useState } from 'react';

const mobileRegexes = [
  /Android/i,
  /iPhone/i,
  /iPad/i,
  /iPod/i,
  /BlackBerry/i,
  /Windows Phone/i,
];

export const useMobile = () => {
  // ssr 에서 window 확인 위함
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toString();
    setIsMobile(mobileRegexes.some((regex) => userAgent.match(regex)));
  }, []);

  return isMobile;
};
