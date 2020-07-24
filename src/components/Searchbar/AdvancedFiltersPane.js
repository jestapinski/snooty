import React from 'react';
import styled from '@emotion/styled';
import Button from '@leafygreen-ui/button';
import Icon from '@leafygreen-ui/icon';
import { uiColors } from '@leafygreen-ui/palette';
import { theme } from '../../theme/docsTheme';

const SEARCH_RESULTS_DESKTOP_HEIGHT = '368px';

const StyledAdvancedFiltersPane = styled('div')`
  box-shadow: 0 0 ${theme.size.tiny} 0 rgba(184, 196, 194, 0.48);
  height: ${SEARCH_RESULTS_DESKTOP_HEIGHT};
  position: relative;
  padding: 38px ${theme.size.default} 0;
`;

const StyledReturnButton = styled(Button)`
  color: ${uiColors.blue.base};
  font-family: Akzidenz;
  font-size: 12px;
  letter-spacing: 0.5px;
  line-height: ${theme.size.default};
  margin: 0;
  padding: ${theme.size.tiny};
  /* Below removes default hover effects from button */
  background: none;
  background-image: none;
  border: none;
  box-shadow: none;
  :before {
    display: none;
  }
  :after {
    display: none;
  }
`;

const AdvancedFiltersPane = ({ closeFiltersPane }) => {
  return (
    <StyledAdvancedFiltersPane>
      <StyledReturnButton onClick={closeFiltersPane}>
        <Icon glyph="ArrowLeft" size="small" />
        &nbsp;Cancel
      </StyledReturnButton>
    </StyledAdvancedFiltersPane>
  );
};

export default AdvancedFiltersPane;
