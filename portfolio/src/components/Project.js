import React from "react";
import styled from "styled-components";
import { AiFillGithub, AiFillHome } from "react-icons/ai";

const A = styled.a`
  font-size: 28px;
`;

function Project() {
  return (
    <div>
      <h2>프로젝트 이름</h2>
      <h3>간단한 설명</h3>
      <p>설명(개발일자, 개발직무, 나의 기여도, 기술스택 등)</p>
      <A href="#">
        <AiFillGithub />
      </A>
      <A href="#">
        <AiFillHome />
      </A>
    </div>
  );
}

export default Project;
