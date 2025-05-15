/** External Dependencies */
import styled, { css } from 'styled-components';
import modalTitle from '@scaleflex/ui/core/modal-title';
import { Modal, ModalActions } from '@scaleflex/ui/core';
import { Color as PC } from '@scaleflex/ui/utils/types/palette';
import { FontVariant as FV } from '@scaleflex/ui/utils/types/typography';

const StyledModal = styled(Modal)`
  width: ${({ width }) => width || '300px'};
  max-width: unset;
`;

const StyledModalTitle = styled(modalTitle)(
  ({ theme, isWarning }) => css`
    padding-bottom: 0;

    .SfxModalTitle-Icon {
      background-color: ${isWarning && theme.palette[PC.Orange_0_1_Overlay]};
    }

    .SfxModalTitle-LabelPrimary {
      margin-bottom: 24px;
      font-size: 1.25rem !important;
      font-family: "Open Sans", sans-serif !important;
      color: black !important;
      }
      
      .SfxModalTitle-LabelSecondary {
        font-size: 1rem !important;
    font-family: "Open Sans", sans-serif !important;
    color: black !important;
      text-align: center;
    }
  `,
);

const StyledModalActions = styled(ModalActions)`
  gap: 12px;
  padding: 24px;
  .SfxButton-root {
    flex: 1;
    margin: 0;
    height: 30px;
    color: black;
    border-radius: 50px;
    background-color: white;
    border: 1px solid #c9c9c9;
    line-height: 14px;
    font-family: "Open Sans", sans-serif;
    letter-spacing: 0.04rem;

    & > span > span {
      font-size: 0.75rem;
    }

    &:hover {
      background-color: #dedede;
    }
  }
`;

export { StyledModal, StyledModalTitle, StyledModalActions };
