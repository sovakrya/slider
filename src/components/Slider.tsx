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

const MainSliderBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SlidesListWrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  position: relative;
`;

export default function Slider({
  delay = 5,
  slides,
  loop,
  navs,
  auto,
  pages,
  stopMouseHover,
}: PropsSlider) {
  const [currentIdx, setSlide] = useState(0);
  const [autoSlide, setAutoSlide] = useState(auto);

  function changeSlideRight() {
    if (loop) {
      if (currentIdx === 2) {
        setSlide(0);
        return;
      }
    } else {
      if (currentIdx === 2) {
        return;
      }
    }

    setSlide((prevSlide) => (prevSlide += 1));
    return;
  }

  function changeSlideLeft() {
    if (loop) {
      if (currentIdx === 0) {
        setSlide(2);
        return;
      }
    } else {
      if (currentIdx === 0) {
        return;
      }
    }

    setSlide((prevSlide) => (prevSlide -= 1));
    return;
  }

  function onSlideMouseEnter() {
    if (!auto) {
      return;
    }

    if (!stopMouseHover) {
      return;
    }
    setAutoSlide(false);
  }

  function onSlideMouseLeave() {
    if (!auto) {
      return;
    }

    if (!stopMouseHover) {
      return;
    }
    setAutoSlide(true);
  }

  useEffect(() => {
    if (!autoSlide) {
      return;
    }

    const interval = setInterval(() => {
      changeSlideRight();
    }, delay * 1000);

    return () => {
      clearInterval(interval);
    };
  });

  const visibleSlides: SlideItem[] = [];

  for (let i = currentIdx; i < currentIdx + 3; i++) {
    let idx = i - 1;
    if (idx < 0) {
      visibleSlides.push(slides[slides.length - 1]);
      continue;
    }

    if (idx >= slides.length) {
      visibleSlides.push(slides[0]);
      continue;
    }

    visibleSlides.push(slides[idx]);
  }

  return (
    <MainSliderBox>
      <SliderContext.Provider value={{ slide: currentIdx, setSlide }}>
        <Arrows
          changeSlideLeft={changeSlideLeft}
          changeSlideRight={changeSlideRight}
          navs={navs}
        />

        <span>{`${currentIdx + 1}/${slides.length}`}</span>

        <SlidesListWrapper>
          <Slide
            slide={visibleSlides[0]}
            onSlideMouseEnter={onSlideMouseEnter}
            onSlideMouseLeave={onSlideMouseLeave}
            key={visibleSlides[0].id}
            currentIndex={-1}
          />
          <Slide
            slide={visibleSlides[1]}
            onSlideMouseEnter={onSlideMouseEnter}
            onSlideMouseLeave={onSlideMouseLeave}
            key={visibleSlides[1].id}
            currentIndex={0}
          />
          <Slide
            slide={visibleSlides[2]}
            onSlideMouseEnter={onSlideMouseEnter}
            onSlideMouseLeave={onSlideMouseLeave}
            key={visibleSlides[2].id}
            currentIndex={1}
          />
        </SlidesListWrapper>

        <Dots slidesCount={slides.length} slide={currentIdx} pages={pages} />
      </SliderContext.Provider>
    </MainSliderBox>
  );
}
