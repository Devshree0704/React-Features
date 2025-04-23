import "./App.css";
import { useState } from "react";
import useThrottle from "./Hooks/useThrottle";

function App() {
  const [normalCount, setNormalCount] = useState(0);
  const [throttleCount, setThrottleCount] = useState(0);

  const ThrottleFn = useThrottle((value) => {
    setThrottleCount((c) => c + 1);
    console.log(value);
  }, 5000);

  const handleButton = () => {
    setNormalCount((c) => c + 1);
    ThrottleFn("throttled");
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
