import "./App.css";
import Details from "./Components/Details";
import Hobbies from "./Components/Hobbies";
import Settings from "./Components/Settings";
import { useState } from "react";
import { useContext } from "react";
import { FormContext } from "./Hooks/FormContext";

function App() {
  const tabs = [
    {
      id: 1,
      name: "Details",
      component: <Details />,
    },
    {
      id: 2,
      name: "Hobbies",
      component: <Hobbies />,
    },
    {
      id: 3,
      name: "Settings",
      component: <Settings />,
    },
  ];

  // const [tabIndex, setTabIndex] = useState(0);
  const { tabIndex, setTabIndex } = useContext(FormContext);

  return (
    <>
      <h3>Tabs-Form</h3>
      <div className="container">
        <div className="tab-container">
          {tabs.map((element) => {
            return (
              <div key={element.id}>
                <div
                  className="tab"
                  onClick={() => setTabIndex(element.id - 1)}
                  style={
                    element.id - 1 === tabIndex
                      ? { textDecorationLine: "underline" }
                      : {}
                  }
                >
                  {element.name}
                </div>
              </div>
            );
          })}
        </div>

        <section>{tabs[tabIndex].component}</section>
      </div>
    </>
  );
}

export default App;
