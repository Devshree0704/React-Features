import { useState } from "react";
import { data } from "./Data";
import "./App.css";

const App = () => {
  const [accordian, setAccordian] = useState(data);

  const handleAccordian = (id) => {
    console.log("id:", id);
    const updateAccordian = accordian.map((element) => {
      return element.id === id
        ? { ...element, isOpen: !element.isOpen }
        : { ...element, isOpen: false };
    });

    setAccordian(updateAccordian);
  };

  console.log("Accordian:", accordian);
  return (
    <div className="app">
      <h3>Accordian</h3>
      <div className="accordian-container">
        {accordian.map((element) => {
          return (
            <div className="accordian" key={element.id}>
              <div
                className="title"
                onClick={() => {
                  handleAccordian(element.id);
                }}
              >
                {element.title}
              </div>
              <div
                className="content"
                style={
                  element.isOpen ? { display: "block" } : { display: "none" }
                }
              >
                {element.content}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
