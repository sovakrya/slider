import styled from "styled-components";
import Dot from "./Dot";

const DotsWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
`;

export default function Dots(props: {
  slidesCount: number;
  slide: number;
  pages: boolean;
}) {
  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < props.slidesCount; i++) {
      dots.push(<Dot key={i} currentDot={i} slideNumber={props.slide} />);
    }

    return dots;
  };

  return <DotsWrapper>{props.pages ? renderDots() : <></>}</DotsWrapper>;
}
