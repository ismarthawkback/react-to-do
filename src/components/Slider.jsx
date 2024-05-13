import React, { useState } from "react";
import styled from "styled-components";

const SliderContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 60px; /* Increased width */
  height: 30px; /* Increased height */
  margin-top: 10px;
`;

const SliderInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const SliderBackground = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => (props.checked ? "green" : "#bf4f74")};
  transition: 0.4s;
  border-radius: 30px; /* Increased border-radius */

  &:before {
    position: absolute;
    content: "";
    height: 26px; /* Increased height */
    width: 26px; /* Increased width */
    left: ${(props) =>
      props.checked ? "calc(100% - 28px)" : "2px"}; /* Adjusted left position */
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const Slider = ({ checked, toggle }) => {
  return (
    <SliderContainer>
      <SliderInput type="checkbox" onChange={toggle} checked={checked} />
      <SliderBackground checked={checked} />
    </SliderContainer>
  );
};

export default Slider;
