import styled from 'styled-components';
import { SlideItem } from '../App';
import SlidesList from './SlidesList';
import Arrows from './Arrows';

type PropsSlider = {
  slides: SlideItem[];
  loop: boolean;
  navs: boolean;
  pages: boolean;
  auto: () => void;
  stopMouseHover: () => void;
  delay: number;
};

const SlidesListWrapper = styled.div`
overflow: hidden;
position: relative
`

export default function Slider(props: {slides: SlideItem[]}) {


    function changeSlide(){}


  return <SlidesListWrapper>
    <Arrows onPushArrow={changeSlide} />
    <SlidesList slides={props.slides}/>
  </SlidesListWrapper>
}
