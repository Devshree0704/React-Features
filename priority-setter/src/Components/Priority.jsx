import { useState } from "react";

const Priority = () => {
  const tasks = [
    {
      id: 1,
      task: "Haircut/Grooming",
      priority: "low",
    },
    {
      id: 2,
      task: "Visit Vet",
      priority: "low",
    },
    {
      id: 3,
      task: "Treat shopping",
      priority: "low",
    },
    {
      id: 4,
      task: "Bathing/Cleaning bed",
      priority: "low",
    },
    {
      id: 5,
      task: "Admission in pet club",
      priority: "low",
    },
  ];

  const [IsTaskSet, setIsTaskSet] = useState(tasks);

  const handleDropDown = (event, index) => {
    const value = event.target.value;

    const updatedPriority = IsTaskSet.map((element) =>
      element.id === index ? { ...element, priority: value } : element
    );

    setIsTaskSet(updatedPriority);
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {IsTaskSet.map((element) => {
          return (
            <section
              style={{
                display: "flex",
                width: "900px",
                border: "1px solid black",
                padding: "15px",
                alignItems: "center",
              }}
              key={element.id}
            >
              <p style={{ width: "300px" }}>{element.task}</p>
              <p style={{ width: "300px" }}>
                {element.priority}
                {element.priority === "high"
                  ? "🔴"
                  : element.priority === "medium"
                  ? "🟡"
                  : "🟢"}
              </p>
              <section>
                <select
                  onChange={(event) => {
                    handleDropDown(event, element.id);
                  }}
                >
                  <option value={"low"}>Low-Priority</option>
                  <option value={"medium"}>Medium-Priority</option>
                  <option value={"high"}>High-Priority</option>
                </select>
              </section>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Priority;
