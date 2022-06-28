import React from "react";
import styled from "styled-components";
import ProjectItem from "./ProjectItem";

const Div = styled.div`
  display: flex;
  justify-content: center;
`;

function ProjectContainer() {
  return (
    <Div>
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </Div>
  );
}

export default ProjectContainer;
