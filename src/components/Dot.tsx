import { useContext } from "react";
import styled from "styled-components";
import { SliderContext } from "./Slider";

export default function Dot(props: {
  currentDot: number;
  slideNumber: number;
}) {
  const slideObj = useContext(SliderContext);

  function goToSlide() {
    if (!slideObj) {
      throw new Error("slide is null!!");
    }
    slideObj.setSlide(props.currentDot);
  }

  const Dot = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 50px;
    &:hover {
    cursor: pointer;
    }
  `;

  const DotNotSelected = styled(Dot)`
    background-color: rgb(182, 190, 182);
  `;
  const DotSelected = styled(Dot)`
    background-color: rgb(128, 134, 128);
  `;

  return (
    <>
      {props.currentDot !== props.slideNumber ? (
        <DotNotSelected onClick={goToSlide}></DotNotSelected>
      ) : (
        <DotSelected onClick={goToSlide}></DotSelected>
      )}
    </>
  );
}
