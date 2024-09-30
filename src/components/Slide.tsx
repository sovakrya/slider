import styled from "styled-components";
import { SlideItem } from "../App";

export default function Slide(props: {
  slide: SlideItem;
  onSlideMouseEnter: () => void;
  onSlideMouseLeave: () => void;
}) {
  const SlideItemMainBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 26px;
  `;

  const SlideTitle = styled.h1`
    font-size: 20px;
    font-weight: 600;
  `;

  return (
    <SlideItemMainBox>
      <img
        src={props.slide.img}
        height={900}
        width={900}
        onMouseEnter={props.onSlideMouseEnter}
        onMouseLeave={props.onSlideMouseLeave}
        alt="cat images"
      />
      <SlideTitle>{props.slide.text}</SlideTitle>
    </SlideItemMainBox>
  );
}
