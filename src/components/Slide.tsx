import styled from "styled-components";
import { SlideItem } from "../App";

const SlideItemMainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  width: 100%;
  flex: 0 0 100%;
  transition: all 0.5s ease;
`;

const SlideTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;

export default function Slide(props: {
  slide: SlideItem;
  currentIndex: number;
  onSlideMouseEnter: () => void;
  onSlideMouseLeave: () => void;
}) {
  return (
    <SlideItemMainBox
      style={{
        transform: `translateX(${props.currentIndex * 100}%)`,
      }}
    >
      <img
        src={props.slide.img}
        height={700}
        width={700}
        onMouseEnter={props.onSlideMouseEnter}
        onMouseLeave={props.onSlideMouseLeave}
        alt="cat images"
      />
      <SlideTitle>{props.slide.text}</SlideTitle>
    </SlideItemMainBox>
  );
}
