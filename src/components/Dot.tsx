import { useState } from "react";
import styled from "styled-components";

export default function Dot() {
  const [isSelected, setIsSelected] = useState(false);

  const DotNotSelected = styled.div`
    heigth: 50px;
    width: 50px;
    background-color: rgb(155, 160, 154);
  `;
  const DotSelected = styled(DotNotSelected)`
    background-color: rgb(107, 110, 106);
  `;

  return (
    <>
      {!isSelected ? (
        <DotNotSelected></DotNotSelected>
      ) : (
        <DotSelected></DotSelected>
      )}
    </>
  );
}
