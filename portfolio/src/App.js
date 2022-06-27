import Main from "./components/Main";
import Project from "./components/Project";
import Skill from "./components/Skill";
import { createGlobalStyle } from "styled-components";
import Introduce from "./components/Introduce";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
   /* background-color: aliceblue; */
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Main />
      <Skill />
      <Project />
      <Project />
      <Project />
      <Introduce />
    </div>
  );
}

export default App;
