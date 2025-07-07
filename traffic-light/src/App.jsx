import "./App.css";
import { useState, useEffect } from "react";

const lightSystem = [
  {
    id: 0,
    color: "red",
    duration: 3,
  },
  {
    id: 1,
    color: "yellow",
    duration: 2,
  },
  {
    id: 2,
    color: "green",
    duration: 5,
  },
];

function App() {
  const [currentLight, setCurrentLight] = useState(0);
  const length = lightSystem.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      const updatedLight = currentLight === length - 1 ? 0 : currentLight + 1;
      setCurrentLight(updatedLight);
    }, lightSystem[currentLight].duration * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentLight]);

  return (
    <>
      <h3>Traffic Light</h3>
      <div>
        {lightSystem.map((element) => {
          const active = element.id === currentLight;
          return (
            <div
              key={element.id}
              style={{
                width: "150px",
                height: "150px",
                border: "1px solid black",
                backgroundColor: active ? element.color : "white",
                marginBottom: "5px",
                borderRadius: "50%",
              }}
            ></div>
          );
        })}
      </div>
    </>
  );
}

export default App;
