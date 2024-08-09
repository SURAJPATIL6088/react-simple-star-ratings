import React, { useState } from "react";
import "../css properties/StarRating.css";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const starAr = [1, 2, 3, 4, 5];

  return (
    <div>
      {starAr.map((star, index) => (
        <div className="star__content" key={index}>
          <button
            onClick={() => setRating(star)}
            onMouseOver={() => setHover(star)}
            onMouseLeave={() => setHover(rating)}
            className="btn__star"
          >
            <span
              className={`star ${star <= (hover || rating) ? "on" : "off"}`}
            >
              &#9733;
            </span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default StarRating;
