import React from "react";
import styled, { keyframes, css } from "styled-components";

let text = "안녕하세요.";
let text2 = " 신입 프론트엔드 개발자 김혜민 입니다.";
const typing = keyframes`
   from {
    width: 0;
  }
`;

const blink = keyframes`
  50% {
    border-color: transparent;
  }
`;

const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: inline-block;
  ${({ length }) => css`
    width: 10ch;
    animation: ${typing} 1s steps(${length}),
      ${blink} 0.5s step-end infinite alternate;
  `}
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-size: 28px;
`;

const ContentS = styled.div`
  ${({ length }) => css`
    animation: ${typing} 2s steps(${length}),
      ${blink} 0.5s step-end infinite alternate;
  `}
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-size: 28px;
  animation-delay: 3s;
`;

function Main() {
  return (
    <MainContainer>
      <Content length={text.length}>안녕하세요.</Content>
      {/* <ContentS length={text2.length}>
        신입 프론트엔드 개발자 김혜민 입니다.
      </ContentS> */}
    </MainContainer>
  );
}

export default Main;
