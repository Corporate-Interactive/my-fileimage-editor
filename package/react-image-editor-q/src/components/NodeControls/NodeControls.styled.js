/** External Dependencies */
import styled from "styled-components";

const StyledNodeControls = styled.div(
  ({ theme, top, left }) => `
  position: absolute;
  z-index: 1;
  background: ${theme.palette["bg-secondary"]};
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 1px 2px ${theme.palette["light-shadow"]};
  top: ${(top || 0) + 8}px;
  left: ${(left || 0) + 4}px;
  transform: translateX(-50%);
  height: 32px;
  color: black;
  & > button {
    color: black;
  }
  & > button:hover {
    color: black;
    background-color: #dedede;
  }

  & > button:first-child:hover {
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
  }

  & > button:last-child:hover {
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
  }
`
);

export { StyledNodeControls };
