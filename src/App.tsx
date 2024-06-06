import React, { useState } from "react";
import "./App.css";
import ChartWrapper from "./components/ChartWrapper";

function App() {
  const [ratingList, setRatingList] = useState<number[]>([35, 50, 40, 22, 10]);

  const randomGenerateRating = () => {
    const randomRating = new Array(5)
      .fill(0)
      .map((_, index) => Math.floor(Math.random() * 50));
    setRatingList(randomRating);
  };

  return (
    <div className="App">
      <div className="graph-btn-container">
        <div className="graph-container">
          <ChartWrapper ratings={ratingList} />
        </div>
        <button className="regenerate-btn" onClick={randomGenerateRating}>
          Regenerate
        </button>
      </div>
    </div>
  );
}

export default App;
