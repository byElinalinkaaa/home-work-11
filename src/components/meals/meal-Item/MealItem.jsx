import React from "react";
import styled from "styled-components";
import MealItemForm from "./MealItemForm";
const MealItem = ({ meal }) => {
  return (
    <Container>
      <StyledItemInfo>
        <StyledTitle>{meal.title}</StyledTitle>
        <p>{meal.description}</p>
        <span>{meal.price}</span>
      </StyledItemInfo>
      <MealItemForm id={meal.id} />
    </Container>
  );
};
export default MealItem;
const Container = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #D6D6D6;
  margin-bottom: 24px;
  :last-child {
    border: none;
    margin-bottom: 0;
  }
`;
const StyledItemInfo = styled.div`
  margin-bottom: 20px;
  p {
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin: 0;
    margin-top: 4px;
  }
  span {
    color: #AD5502;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    margin-top: 4px;
  }
`;
const StyledTitle = styled.h4`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #222222;
  margin: 0;
`;
























