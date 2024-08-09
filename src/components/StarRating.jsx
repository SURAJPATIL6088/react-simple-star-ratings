// import React, { useState } from "react";
// import "../css properties/StarRating.css";

// const StarRating = () => {
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);

//   const starAr = [1, 2, 3, 4, 5];

//   return (
//     <div className="star-rating">
//       {starAr.map((star) => (
//         <div className="star__content" key={star}>
//           <button
//             onClick={() => setRating(star)}
//             onMouseOver={() => setHover(star)}
//             onMouseLeave={() => setHover(rating)}
//             className="btn__star"
//           >
//             <span
//               className={`star ${star <= (hover || rating) ? "on" : "off"}`}
//             >
//               &#9733;
//             </span>
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StarRating;

import React, { useState } from 'react';
import styled from 'styled-components';

const StarRatingContainer = styled.div`
  display: flex;
`;

const StarContent = styled.div`
  display: inline-block;
`;

const ButtonStar = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0 5px;
  outline: none;
`;

const Star = styled.span`
  font-size: 3rem;
  color: ${props => (props.active ? 'gold' : 'gray')};
`;

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const starAr = [1, 2, 3, 4, 5];

  return (
    <StarRatingContainer>
      {starAr.map(star => (
        <StarContent key={star}>
          <ButtonStar
            onClick={() => setRating(star)}
            onMouseOver={() => setHover(star)}
            onMouseLeave={() => setHover(rating)}
          >
            <Star active={star <= (hover || rating)}>
              &#9733;
            </Star>
          </ButtonStar>
        </StarContent>
      ))}
    </StarRatingContainer>
  );
};

export default StarRating;
