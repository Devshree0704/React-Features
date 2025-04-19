const useThrottle = (func, delay) => {
  let throttleId = null;

  return (...args) => {
    if (!throttleId) {
      func(...args);
      throttleId = setTimeout(() => {
        throttleId = null;
      }, delay);
    }
  };
};

export default useThrottle;
