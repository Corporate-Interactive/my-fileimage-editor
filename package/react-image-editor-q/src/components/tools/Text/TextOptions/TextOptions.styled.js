/** External Dependencies */
import styled from 'styled-components';
import Input from '@scaleflex/ui/core/input';
import Select from '@scaleflex/ui/core/select';

const StyledFontFamilySelect = styled(Select)`
  width: 160px;
  border: 1px solid #a8a8a8;
  border-radius: 50px;
  font-size: 11px;
`;

const StyledFontSizeInput = styled(Input)`
  width: 72px;
  border: 1px solid #a8a8a8;
  border-radius: 50px;
 input {
    font-size: 11px !important;
  }
`;

const StyledToolsWrapper = styled.div`
  display: flex;
`;

export { StyledFontFamilySelect, StyledFontSizeInput, StyledToolsWrapper };
