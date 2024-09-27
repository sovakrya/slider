import styled from "styled-components";
import { SlideItem } from "../App";
import Arrows from "./Arrows";
import React, { useEffect, useState } from "react";
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

type SliderContextType = {
  slide: number;
  setSlide: (slide: number) => void;
};
export const SliderContext = React.createContext<SliderContextType | null>(
  null
);

export default function Slider(props: { slides: SlideItem[]; loop: boolean, navs: boolean , pags: boolean, auto: boolean}) {
  const [slide, setSlide] = useState(0);

  function changeSlideRight() {
    if (props.loop) {
      if (slide === 2) {
        setSlide(0);
        return;
      }
    } else {
      if (slide === 2) {
        return;
      }
    }

    setSlide((prevSlide) => (prevSlide += 1));
    return;
  }

  function changeSlideLeft() {
    if(props.loop){
    if (slide === 0) {
      setSlide(2);
      return;
    }} else {
      if(slide === 0){
        return
      }
    }

    setSlide((prevSlide) => (prevSlide -= 1));
    return;
  }


  useEffect(() => {
    if(!(props.auto)){
      return
    }

    const interval = setInterval(() => {

    })
  })

  const SlidesListWrapper = styled.div``;

  return (
    <SlidesListWrapper>
      <SliderContext.Provider value={{ slide, setSlide }}>
        <Arrows
          changeSlideLeft={changeSlideLeft}
          changeSlideRight={changeSlideRight}
          navs={props.navs}
        />

        <div>
          <span>{`${slide + 1}/${props.slides.length}`}</span>
          <Slide slide={props.slides[slide]} />
          <Dots slidesCount={props.slides.length} slide={slide} pags={props.pags} />
        </div>
      </SliderContext.Provider>
    </SlidesListWrapper>
  );
}
