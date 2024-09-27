import styled from "styled-components";

export default function Dot(props: { currentDot: number; slide: number }) {
  const Dot = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 50px;
    
  `;

  const DotNotSelected = styled(Dot)`
    background-color: rgb(182, 190, 182);;
  `;
  const DotSelected = styled(Dot)`
    background-color: rgb(128, 134, 128);
  `;

  return (
    <>
      {props.currentDot !== props.slide ? (
        <DotNotSelected></DotNotSelected>
      ) : (
        <DotSelected></DotSelected>
      )}
    </>
  );
}
