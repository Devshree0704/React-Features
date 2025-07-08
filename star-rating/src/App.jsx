import "./App.css";
import { useState } from "react";

function App() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const totalRating = 5;

  const handleRating = (index) => {
    setRating(rating === index + 1 ? 0 : index + 1);
  };

  return (
    <>
      <h3>Star-Rating</h3>
      <div className="star-container">
        {[...Array(totalRating)].map((_, index) => {
          return (
            <div
              className="star-item"
              style={
                (rating > 0 && rating > index) ||
                (hoverRating > 0 && hoverRating > index)
                  ? { backgroundColor: "yellow" }
                  : {}
              }
              onClick={() => {
                handleRating(index);
              }}
              onMouseEnter={() => setHoverRating(index + 1)}
              onMouseLeave={() => setHoverRating(0)}
            >
              {index}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
