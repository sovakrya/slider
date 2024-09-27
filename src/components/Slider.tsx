import styled from "styled-components";
import { SlideItem } from "../App";
import Arrows from "./Arrows";
import { useState } from "react";
import Slide from "./Slide";
import Dots from "./Dots";

// type PropsSlider = {
//   slides: SlideItem[];
//   loop: boolean;
//   navs: boolean;
//   pages: boolean;
//   auto: () => void;
//   stopMouseHover: () => void;
//   delay: number;
// };

const SlidesListWrapper = styled.div`
`;

export default function Slider(props: { slides: SlideItem[] }) {
  const [slide, setSlide] = useState(0);

  function changeSlideRight() {
    if (slide === 2) {
      setSlide(0);
      return;
    }

    setSlide((prevSlide) => (prevSlide += 1));
    return;
  }

  function changeSlideLeft() {
    if (slide === 0) {
      setSlide(2);
      return;
    }

    setSlide((prevSlide) => (prevSlide -= 1));
    return;
  }

  return (
    <SlidesListWrapper>
      <Arrows
        changeSlideLeft={changeSlideLeft}
        changeSlideRight={changeSlideRight}
      />

    
      <div>
        <span>{`${slide + 1}/${props.slides.length}`}</span>
        <Slide slide={props.slides[slide]} />
        <Dots slidesCount={props.slides.length} slide={slide} />
      </div>
    </SlidesListWrapper>
  );
}
