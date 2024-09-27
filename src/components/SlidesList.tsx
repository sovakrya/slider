import styled from "styled-components";
import { SlideItem } from "../App";
import Slide from "./Slide";

export default function SlidesList(props: { slides: SlideItem[] }) {
  const SlidesListMainBox = styled.div`
    display: flex;
    padding: 24px 0 24px 0;
  `;

  return (
    <SlidesListMainBox>
      {props.slides.map((slideItem, idx) => (
        <Slide slideItem={slideItem} key={String(idx) + slideItem.text} />
      ))}
    </SlidesListMainBox>
  );
}
