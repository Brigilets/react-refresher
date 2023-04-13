import bird from "./images/bird.svg";
import cat from "./images/cat.svg";
import dog from "./images/dog.svg";
import gator from "./images/gator.svg";
import horse from "./images/horse.svg";
import heart from "./images/heart.svg";
import "./AnimalShow.css";
import { useState } from "react";

const svgMAp = {
  bird,
  cat,
  dog,
  gator,
  horse,
};

const AnimalShow = ({ type }) => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => setClicks(clicks + 1);

  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" src={svgMAp[type]} alt={type} />
      <img
        className="heart"
        src={heart}
        alt="heart"
        style={{ width: 10 + 10 * clicks + "px" }}
      />
    </div>
  );
};

export { AnimalShow };
