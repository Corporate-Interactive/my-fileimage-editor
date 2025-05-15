/** External Dependencies */
import styled from "styled-components";
import Button from "@scaleflex/ui/core/button";
import { Color as PC } from "@scaleflex/ui/utils/types/palette/color";
import { Menu, MenuItem, MenuItemIcon } from "@scaleflex/ui/core";

const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ $noMargin }) => ($noMargin ? "0" : "12px")};
  flex-shrink: 0;
`;

const StyledMainButton = styled(Button)`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffd843;
  & > span > span {
    font-size: 0.75rem !important;
  }
  &:hover {
    background-color: #fcc638;
  }
  border: 1px solid #fcc638;
  padding: 6px 12px;
  &.FIE_watermark-add-button {
    background-color: white;
    border: 1px solid black;
  }
  &.fie_topbar-save-button: hover {
    background-color: #fcc638;
  }
  &.FIE_watermark-add-button:hover {
    background-color: #dedede;
    border: 1px solid black;
    color: black;
  }
  color: black;
  border-radius: 20px;

`;

const StyledMenu = styled(Menu)`
  padding: 8px;
  background-color: ${({ theme: { palette } }) =>
    palette[PC.BackgroundStateless]};
`;

const StyledMenuItem = styled(MenuItem)`
  border-radius: 4px;
`;

const StyledMenuIcon = styled(MenuItemIcon)`
  display: flex;
  align-items: center;
`;

export {
  StyledButtonWrapper,
  StyledMainButton,
  StyledMenu,
  StyledMenuItem,
  StyledMenuIcon,
};
