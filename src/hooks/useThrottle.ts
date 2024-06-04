import { useCallback, useEffect, useRef } from 'react';

export function useThrottle<T extends unknown[]>(callback: (...args: T[]) => void, delay: number) {
   const throttleRef = useRef<null | boolean>(null);
   const throttleTimeout = useRef<number>(0);
   const throttledCallback = useCallback(
      (...args: T[]) => {
         if (!throttleRef.current) {
            callback(...args);
            throttleRef.current = true;
            throttleTimeout.current = setTimeout(() => {
               throttleRef.current = false;
            }, delay);
         }
      },
      [delay, callback],
   );

   useEffect(() => {
      return () => {
         if (throttleTimeout.current) {
            clearTimeout(throttleTimeout.current);
         }
      };
   }, []);
   return throttledCallback;
}
