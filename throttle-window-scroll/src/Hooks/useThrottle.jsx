const useThrottle = (func, delay) => {
  let throttleId = null;

  return () => {
    if (!throttleId) {
      func();
      throttleId = setInterval(() => {
        throttleId = null;
      }, delay);
    }
  };
};

export default useThrottle;
