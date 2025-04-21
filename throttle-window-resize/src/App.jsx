import { useState, useEffect, useRef } from "react";
import "./App.css";
import useThrottle from "./Hooks/useThrottle";

function App() {
  const [normalResize, setNormalResize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const [throttleResize, setThrottleResize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const throttleFun = useRef(null);

  if (!throttleFun.current) {
    throttleFun.current = useThrottle(handleThrottleResize, 3000);
  }

  function handleThrottleResize() {
    setThrottleResize({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }

  useEffect(() => {
    const handleResize = () => {
      setNormalResize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
      throttleFun.current();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [normalResize]);

  return (
    <>
      <h3>Throttle-Window-Resize</h3>
      <div style={{ display: "flex", gap: "50px" }}>
        <div>
          <section>Normal Resize:</section>
          <span>
            {normalResize.height} X {normalResize.width}
          </span>
        </div>

        <div>
          <section>Throttle Resize:</section>
          <span>
            {throttleResize.height} X {throttleResize.width}
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
