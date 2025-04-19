import "./App.css";
import { useState, useRef } from "react";
import useThrottle from "./Hooks/useThrottle";

function App() {
  const [normalCount, setNormalCount] = useState(0);
  const [throttleCount, setThrottleCount] = useState(0);
  const throttleFun = useRef(null);

  if (!throttleFun.current) {
    throttleFun.current = useThrottle((message) => {
      setThrottleCount((c) => c + 1);
      console.log(message);
    }, 5000);
  }

  const handleButton = () => {
    setNormalCount((c) => c + 1);
    throttleFun.current("Throttled value");
  };

  return (
    <>
      <h3>Throttling- Multiple Clicks</h3>
      <button onClick={handleButton}>Click Me</button>
      <div>Normal Clicks: {normalCount}</div>
      <div>Throttled Clicks: {throttleCount}</div>
    </>
  );
}

export default App;
