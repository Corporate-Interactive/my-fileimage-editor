/** External Dependencies */
import styled from "styled-components";
import Label from "@scaleflex/ui/core/label";

const StyledTabItem = styled.div(
  ({ theme }) => `
    width: 72px;
    min-height: 72px;
    padding: 4px 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    background: white;
    align-items: center;
    justify-content: center;
    border: 0.01rem solid #dedede;
    [data-phone='true'] & {
      margin-bottom: 0;
      height: 50px;
      border-radius: 0;
    }

    svg {
      color: black;
    }

    &,
    * {
      cursor: pointer;
    }

    &:hover {
     border: 1px solid #d6d6d6;
    }

    &[aria-selected='true'] {
    background: #dedede;
     border: 0.062rem solid #c9c9c9;
      * {
        color: black;
      }
    }
  `
);

const StyledTabItemLabel = styled(Label)(
  ({ theme }) => `
  color: black;
  font-size: 0.6875em;
   line-height: 14px;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 0.04rem;
  span {
    white-space: normal;
  }

  [data-phone='true'] & {
    font-size: 10px;
  }
`
);

export { StyledTabItem, StyledTabItemLabel };
