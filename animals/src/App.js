import { useState } from "react";
import { AnimalShow } from "./AnimalShow";
import "./App.css";

function getRandomAnimal() {
  const animals = ["bird", "cat", "dog", "gator", "horse", "gator"];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  return (
    <div className="app">
      <button onClick={handleClick}>Add animal</button>
      <div className="animal-list">
        {animals.map((animal, index) => {
          return <AnimalShow type={animal} key={index + animal} />;
        })}
      </div>
    </div>
  );
}

export default App;
