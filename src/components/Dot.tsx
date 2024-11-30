import { useContext } from "react";
import styled from "styled-components";
import { SliderContext } from "./Slider";

const DotItem = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50px;
  &:hover {
    cursor: pointer;
  }
`;

const DotNotSelected = styled(DotItem)`
  background-color: rgb(182, 190, 182);
`;
const DotSelected = styled(DotItem)`
  background-color: rgb(128, 134, 128);
`;

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
