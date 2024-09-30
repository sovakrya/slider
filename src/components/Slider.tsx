import styled from "styled-components";
import { SlideItem } from "../App";
import Arrows from "./Arrows";
import React, { useEffect, useState } from "react";
import Slide from "./Slide";
import Dots from "./Dots";

type SliderContextType = {
  slide: number;
  setSlide: (slide: number) => void;
};
export const SliderContext = React.createContext<SliderContextType | null>(
  null
);

type PropsSlider = {
  slides: SlideItem[];
  loop: boolean;
  navs: boolean;
  pages: boolean;
  auto: boolean;
  stopMouseHover: boolean;
  delay?: number;
};

export default function Slider({
  delay = 5,
  slides,
  loop,
  navs,
  auto,
  pages,
  stopMouseHover,
}: PropsSlider) {
  const [slide, setSlide] = useState(0);
  const [autoSlide, setAutoSlide] = useState(auto);

  function changeSlideRight() {
    if (loop) {
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
    if (loop) {
      if (slide === 0) {
        setSlide(2);
        return;
      }
    } else {
      if (slide === 0) {
        return;
      }
    }

    setSlide((prevSlide) => (prevSlide -= 1));
    return;
  }

  function onSlideMouseEnter() {
    if (!stopMouseHover) {
      return;
    }
    setAutoSlide(false);
  }

  function onSlideMouseLeave() {
    if (!stopMouseHover) {
      return;
    }
    setAutoSlide(true);
  }

  useEffect(() => {
    if (!autoSlide) {
      return;
    }

    if (delay) {
      const interval = setInterval(() => {
        changeSlideRight();
      }, delay * 1000);

      return () => {
        clearInterval(interval);
      };
    }
  });

  const SlidesListWrapper = styled.div``;

  return (
    <SlidesListWrapper>
      <SliderContext.Provider value={{ slide, setSlide }}>
        <Arrows
          changeSlideLeft={changeSlideLeft}
          changeSlideRight={changeSlideRight}
          navs={navs}
        />

        <div>
          <span>{`${slide + 1}/${slides.length}`}</span>
          <Slide
            slide={slides[slide]}
            onSlideMouseEnter={onSlideMouseEnter}
            onSlideMouseLeave={onSlideMouseLeave}
          />
          <Dots slidesCount={slides.length} slide={slide} pages={pages} />
        </div>
      </SliderContext.Provider>
    </SlidesListWrapper>
  );
}
