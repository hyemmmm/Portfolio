import Main from "./components/Main";
import Skill from "./components/Skill";
import { createGlobalStyle } from "styled-components";
import Introduce from "./components/Introduce";
import { useCallback, useEffect, useRef, useState } from "react";
import ProjectContainer from "./components/ProjectContainer";
import Header from "./components/Header";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   height: 400vh;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  ul {
    list-style: none;
  }
`;

function App() {
  const [currentSection, setCurrentSection] = useState(0);

  const onChange = useCallback(
    (e) => {
      if (e.deltaY > 0 && currentSection < 3) {
        setCurrentSection(currentSection + 1);
      } else if (e.deltaY < 0) {
        if (currentSection > 0) {
          setCurrentSection(currentSection - 1);
        }
      }
    },
    [currentSection]
  );

  useEffect(() => {
    window.scrollTo({
      top: currentSection * window.innerHeight,
      behavior: "smooth",
    });
  }, [currentSection]);

  return (
    <div onWheel={onChange}>
      <GlobalStyle />
      <Header currentSection={currentSection} />
      <Main />
      <Skill />
      <ProjectContainer />
      <Introduce />
    </div>
  );
}

export default App;
