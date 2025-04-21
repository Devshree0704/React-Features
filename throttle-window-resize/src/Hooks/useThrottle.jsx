const useThrottle = (func, delay) => {
  let throttleId = null;

  return () => {
    if (!throttleId) {
      func();
      throttleId = setTimeout(() => {
        throttleId = null;
      }, delay);
    }
  };
};

export default useThrottle;
