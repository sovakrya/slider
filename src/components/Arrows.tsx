import styled from "styled-components";
import arrow from "../assets/icons/arrow.svg";
import { useState } from "react";

export default function Arrows(props: {changeSlideLeft: () => void, changeSlideRight: () => void}) {



  const ArrowsBox = styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 1;
  `;

  const Arrow = styled.img `
  position: absolute;
  bottom: 50%;


  &:hover {
      cursor: pointer;
    }
  `

  const ArrowRight = styled(Arrow)`
    right: 0;
  `;

  const ArrowLeft = styled(Arrow)`
    transform: rotate(180deg);

  `;
  return (
    <ArrowsBox>
      <ArrowLeft src={arrow} onClick={props.changeSlideLeft}></ArrowLeft>
      <ArrowRight src={arrow} onClick={props.changeSlideRight}></ArrowRight>
    </ArrowsBox>
  );
}
