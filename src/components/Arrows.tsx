import styled from "styled-components";
import arrow from "../assets/icons/arrow.svg";

const Arrow = styled.img`
  position: absolute;
  bottom: 50%;
  z-index: 1;

  &:hover {
    cursor: pointer;
  }
`;

const ArrowRight = styled(Arrow)`
  right: 0;
`;

const ArrowLeft = styled(Arrow)`
  transform: rotate(180deg);
`;

export default function Arrows(props: {
  changeSlideLeft: () => void;
  changeSlideRight: () => void;
  navs: boolean;
}) {
  return (
    <>
      {props.navs ? (
        <>
          <ArrowLeft src={arrow} onClick={props.changeSlideLeft}></ArrowLeft>
          <ArrowRight src={arrow} onClick={props.changeSlideRight}></ArrowRight>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
