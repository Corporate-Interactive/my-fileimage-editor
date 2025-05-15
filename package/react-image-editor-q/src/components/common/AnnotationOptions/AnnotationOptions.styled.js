/** External Dependencies */
import styled from 'styled-components';
import Label from '@scaleflex/ui/core/label';
import { Color as PC } from '@scaleflex/ui/utils/types/palette';

const StyledOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  margin-top: 4px;
  gap: 8px;
  flex-wrap: wrap;

  ${({ isPhoneScreen }) =>
    isPhoneScreen &&
    `
    max-width: 315px;
    padding: 0;
  `}

  svg {
    color: ${({ theme: { palette } }) => palette[PC.IconsPrimary]};
  }
`;

const StyledOptionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -4px;
  gap: 4px;

  .FIE_annotation-option-triggerer {
    padding: 6px;
  }
`;

const StyledOptionPopupContent = styled.div`
  background: ${({ theme }) => theme.palette['bg-secondary']};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 8px 12px;
  overflow: visible;

  ${({ position }) =>
    position &&
    `
    display: grid;
    grid-template-columns: repeat(4, auto);
    padding: 0;
    margin-top: 8px;
    box-shadow: 0px 1px 2px ${({ theme }) => theme.palette['light-shadow']};
    `}

  ${({ disablePadding }) =>
    disablePadding &&
    `
      padding: 0;
    `}

  * {
  color: black;
  font-size: 11px;
   line-height: 14px;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 0.04rem;
  }
`;

const StyledSpacedOptionFields = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  ${({ preventFlex }) =>
    preventFlex &&
    `
      display: block;

      label {
        margin-bottom: 8px;
      }
  `}
`;

const StyledTwoColumnsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledColumn = styled.div`
  &:not(:first-child) {
    margin-left: 12px;
  }
`;

const StyledIconWrapper = styled.div(
  ({ theme, addThinBorder, secondaryIconColor, active, watermarkTool }) => `
    cursor: pointer;
    padding: ${watermarkTool ? '6px' : '8px 12px'};
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;

    svg {
      vertical-align: middle;
      margin: 0 auto;
      color: black;
    }

    ${
      addThinBorder
        ? `border: 0.5px solid ${theme.palette['borders-secondary']};
        padding: 8px 8px;`
        : ''
    };
    color: black;

    ${
      active &&
      `
      border-radius: 8px;
      border-color: #c9c9c9;
      background-color: #dedede;

        * {
          color: black;
        }
      `
    }

    :hover {
      background: #dedede;
    }
  `,
);

const StyledIconLabel = styled(Label)`
  color: black;
`;

export {
  StyledTwoColumnsContainer,
  StyledColumn,
  StyledIconWrapper,
  StyledSpacedOptionFields,
  StyledOptions,
  StyledOptionsWrapper,
  StyledOptionPopupContent,
  StyledIconLabel,
};
