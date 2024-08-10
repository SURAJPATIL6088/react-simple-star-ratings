import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  font-family: Verdana, sans-serif;
`;

const StarContent = styled.div`
  display: inline-block;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  outline: none;
`;

const Star = styled.span`
  font-size: 3rem;
  color: ${(props) => (props.active ? "gold" : "gray")};
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-top: 30px;
  color: #ffffff;
  background-color: #636363;
  border-radius: 5px;
  padding: 4px 8px;
  text-align: center;
`;

const TagStarRating = ({
  allowTitleTag,
  tooltipArray
}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [description, setDescription] = useState('Your Vote');

  return (
    <Container>
      {tooltipArray.map((star) => (
        <StarContent key={star.st}>
          <Button
            onClick={() => setRating(star.st)}
            onMouseOver={() => setHover(star.st)}
            onMouseLeave={() => setHover(rating)}
          >
            <Star
              active={star.st <= (hover || rating)}
              onClick={() => setDescription(star.tag)}
            >
              &#9733;
            </Star>
          </Button>
        </StarContent>
      ))}
      {
        allowTitleTag ? (
          <Description>{allowTitleTag && description}</Description>
        ):""
      }
      
    </Container>
  );
};

export default TagStarRating;
