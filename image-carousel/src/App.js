import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [images, setImages] = useState([]);
  const [id, setId] = useState(0);

  useEffect(() => {
    async function getRecipes() {
      try {
        const getData = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s"
        );
        const response = await getData.json();
        setImages(response.meals.map((element) => element.strMealThumb));
      } catch (err) {
        throw new Error("Something is wrong!!");
      }
    }
    getRecipes();
  }, []);

  const totalImages = images.length;

  const handleNext = () => {
    if (id < totalImages - 1) setId((id) => id + 1);
    else setId(0);
  };

  const handlePrev = () => {
    if (id > 0) setId((id) => id - 1);
  };

  console.log("images:", images);
  return (
    <div className="App">
      <h3>Image Carousel</h3>
      <img src={images[id]} alt="image" />
      <div className="actions">
        <button className="prev" disabled={id === 0} onClick={handlePrev}>
          Prev
        </button>
        {id}
        <button
          className="next"
          disabled={id === totalImages - 1}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
