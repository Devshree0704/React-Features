import { useRef } from "react";

const useThrottle = (func, delay) => {
  const throttleId = useRef(null);

  return (...args) => {
    if (!throttleId.current) {
      func(...args);
      throttleId.current = setTimeout(() => {
        throttleId.current = null;
      }, delay);
    }
  };
};

export default useThrottle;
