/** External Dependencies */
import Label from "@scaleflex/ui/core/label";
import { FontVariant as FV } from "@scaleflex/ui/utils/types/typography";
import { Color as PC } from "@scaleflex/ui/utils/types/palette";
import { Stage } from "react-konva";
import styled, { css } from "styled-components";

const StyledFilterItem = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 2px;
  gap: 6px;
  cursor: pointer;
  border-radius: 8px;
  color: black;
  canvas {
    border-radius: 10px;
  }
`;

const FilterItemPreview = styled(Stage)`
  [aria-selected="true"] & {
    padding: 2px;
    color: #e35628;
    border: 1px solid black;
    border-radius: 10px;
  }
`;

const FilterItemLabel = styled(Label)(
  ({ theme }) => css`
    color: black;
    font-size: 0.6875em;
    line-height: 14px;
    font-family: "Open Sans", sans-serif;
    ${theme.typography.font[FV.LabelExtraSmallUp]};

    [aria-selected="true"] & {
      color: black;
    }
  `
);

export { StyledFilterItem, FilterItemPreview, FilterItemLabel };
