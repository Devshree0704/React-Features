import { useRef } from "react";

const useDebounce = (func, delay) => {
  const timerId = useRef(null);

  const debouncedFn = (...args) => {
    if (timerId.current) {
      clearTimeout(timerId.current);
    }

    timerId.current = setTimeout(() => {
      func(...args);
    }, delay);
  };

  return debouncedFn;
};

export default useDebounce;
