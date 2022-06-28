import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const Div = styled.ul`
  display: flex;
  position: fixed;
  width: 100vw;
  justify-content: space-around;
`;

const Li = styled.li`
  cursor: pointer;
  padding: 28px;
  ${({ Isfocus }) =>
    Isfocus &&
    css`
      color: red;
    `}
`;

function Header({ currentSelection }) {
  const [focus, setfocus] = useState(0);
  const headerMenus = ["Main", "Skills", "Project", "Introduce & Contact"];

  useEffect(() => {
    setfocus(currentSelection);
  }, [currentSelection]);

  return (
    <Div>
      {headerMenus.map((menu, idx) => (
        <Li Isfocus={currentSelection === idx ? true : false}>{menu}</Li>
      ))}
    </Div>
  );
}

export default Header;
