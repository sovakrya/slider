import styled from "styled-components";
import { SlideItem } from "../App";

export default function Slide(props: { slideItem: SlideItem; key: string, }) {
  const SlideItemMainBox = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 0 100%;
    position: relative;
    align-items: center;
    gap: 26px;
  `;

  const SlideTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  `


  return (
    <SlideItemMainBox>
      <img src={props.slideItem.img} height={900} width={900}/>
      <SlideTitle>{props.slideItem.text}</SlideTitle>
    </SlideItemMainBox>
  );
}
