import "./App.css";
import { useState, useEffect, useRef } from "react";
import useThrottle from "./Hooks/useThrottle";

function App() {
  const [scrollValue, setScrollValue] = useState(window.scrollY);
  const [throttleScrollValue, setThrottleScollValue] = useState(window.scrollY);
  const throttleFun = useRef(null);

  if (!throttleFun.current) {
    throttleFun.current = useThrottle(handleThrottleScrollValue, 5000);
  }

  function handleThrottleScrollValue() {
    setThrottleScollValue(window.scrollY);
  }

  useEffect(() => {
    const handleScrollValue = () => {
      setScrollValue(window.scrollY);
      throttleFun.current();
    };
    window.addEventListener("scroll", handleScrollValue);

    return () => {
      window.removeEventListener("scroll", handleScrollValue);
    };
  }, [scrollValue]);

  return (
    <div
      style={{
        backgroundColor: "lightblue",
        width: "100vw",
        height: "10000px",
        overflowX: "hidden",
      }}
    >
      <header
        style={{
          backgroundColor: "lightcoral",
          width: "100%",
          position: "fixed",
        }}
      >
        <h3>Throttle-Window-Scroll</h3>
        <div>Normal Scroll Value: {scrollValue.toFixed(2)}</div>
        <div>Throttled Scroll Value: {throttleScrollValue.toFixed(2)}</div>
      </header>
    </div>
  );
}

export default App;
