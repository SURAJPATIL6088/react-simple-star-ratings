import React, { useEffect, useState } from "react";
import "./style.css";

const Star = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [description, setDescription] = useState("");

  const starAr = [
    {
      st: 1,
      tag: "Poor 😔",
    },
    {
      st: 2,
      tag: "Average 😐",
    },
    {
      st: 3,
      tag: "Medium 🙂",
    },
    {
      st: 4,
      tag: "Good 😎",
    },
    {
      st: 5,
      tag: "Awesome 🤩",
    },
  ];

  return (
    <div>
      {starAr.map((star, index) => (
        <div className="star__content" key={index}>
          <button
            onClick={() => setRating(star.st)}
            onMouseOver={() => setHover(star.st)}
            onMouseLeave={() => setHover(rating)}
            className="btn__star"
          >
            <span
              className={`star ${star.st <= (hover || rating) ? "on" : "off"}`}
              onClick={() => setDescription(star.tag)}
            >
              &#9733;
            </span>
          </button>
        </div>
      ))}
      <p>{description}</p>
    </div>
  );
};

export default Star;
