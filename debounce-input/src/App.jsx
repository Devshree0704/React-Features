import { useState } from "react";
import "./App.css";
import useDebounce from "./Hooks/useDebounce";

function App() {
  const [normalInput, setNormalInput] = useState("");
  const [debouncedInput, setDebouncedInput] = useState("");

  // Use the debounced function with the delay
  const debouncedFn = useDebounce((value) => {
    setDebouncedInput(value); // Pass the current input value to setDebouncedInput
  }, 2000);

  const handleInput = (event) => {
    setNormalInput(event.target.value); // Set the normal input
    debouncedFn(event.target.value); // Call the debounced function
  };

  console.log("debounced:", debouncedInput);
  console.log("normal:", normalInput);

  return (
    <>
      <input
        type="text"
        value={normalInput}
        onChange={handleInput} // Directly pass handleInput
      />

      <h2>Normal: {normalInput}</h2>
      <h2>Debounced: {debouncedInput}</h2>
    </>
  );
}

export default App;
