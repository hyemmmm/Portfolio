import React from "react";
import styled from "styled-components";

const Div = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Introduce() {
  return (
    <Div>
      <h3>자기소개 제목</h3>
      <p>자기소개</p>
      <h2>Contact</h2>
      <p> hye04069@gmail.com</p>
    </Div>
  );
}

export default Introduce;
