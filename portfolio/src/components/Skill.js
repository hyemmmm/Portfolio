import React from "react";
import styled from "styled-components";
import HTML from "../img/HTML.png";
import CSS from "../img/CSS.png";
import SCSS from "../img/sass.png";
import JS from "../img/JS.png";
import react from "../img/react.png";
import redux from "../img/redux.png";

const Conatiner = styled.div`
  display: flex;
`;

const ImgBox = styled.div`
  width: 104px;
  height: 104px;
  /* border: 1px solid black; */
  margin: 28px 56px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  &:nth-child(1) {
    background-image: url(${HTML});
  }
  &:nth-child(2) {
    background-image: url(${CSS});
  }
  &:nth-child(3) {
    background-image: url(${SCSS});
    background-size: 150%;
  }
  &:nth-child(4) {
    background-image: url(${JS});
  }
  &:nth-child(5) {
    background-image: url(${react});
    background-size: 240%;
  }
  &:nth-child(6) {
    background-image: url(${redux});
  }
`;

function Skill() {
  return (
    <div>
      <h2>SKILLS</h2>
      <Conatiner>
        <ImgBox />
        <ImgBox />
        <ImgBox />
        <ImgBox />
        <ImgBox />
        <ImgBox />
      </Conatiner>
    </div>
  );
}

export default Skill;
