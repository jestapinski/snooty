import React from 'react';
import styled from '@emotion/styled';
import Button from '@leafygreen-ui/button';

const SEARCH_RESULTS_DESKTOP_HEIGHT = '368px';

const StyledAdvancedFiltersPane = styled('div')`
  height: ${SEARCH_RESULTS_DESKTOP_HEIGHT};
  position: relative;
  padding-top: 38px;
`;

const AdvancedFiltersPane = () => {
  return (
    <StyledAdvancedFiltersPane>
      <Button>Return</Button>
    </StyledAdvancedFiltersPane>
  );
};

export default AdvancedFiltersPane;
