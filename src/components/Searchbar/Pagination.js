import React, { useCallback, useMemo } from 'react';
import styled from '@emotion/styled';
import Button from '@leafygreen-ui/button';
import Icon from '@leafygreen-ui/icon';
import { theme } from '../../theme/docsTheme';

const BUTTON_HEIGHT = theme.size.medium;
const BUTTON_WIDTH = '14px';

const PaginationButton = styled(Button)`
  background-color: #fff;
  height: ${BUTTON_HEIGHT};
  /* button is 24 px and entire container is 36px so 6px top gives equal spacing */
  padding: 0;
  width: ${BUTTON_WIDTH};
  z-index: 1;
  /* Below removes default hover effects from button */
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

const PaginationButtonIcon = styled(Icon)`
  height: ${BUTTON_HEIGHT};
  left: 0;
  position: absolute;
  top: 0;
  width: ${BUTTON_WIDTH};
`;

const PaginationContainer = styled('div')`
  display: flex;
`;

const PaginationText = styled('p')`
  margin: 0 ${theme.size.tiny};
  line-height: 22px;
`;

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const decrementPage = useCallback(() => setCurrentPage(currentPage - 1), [currentPage, setCurrentPage]);
  const incrementPage = useCallback(() => setCurrentPage(currentPage + 1), [currentPage, setCurrentPage]);
  const canDecrementPage = useMemo(() => currentPage !== 1, [currentPage]);
  const canIncrementPage = useMemo(() => currentPage < totalPages, [currentPage, totalPages]);
  return (
    <PaginationContainer>
      <PaginationButton
        aria-label="Back Page"
        disabled={!canDecrementPage}
        glyph={
          <PaginationButtonIcon
            glyph="ChevronLeft"
            fill={canDecrementPage ? '#3D4F58' : '#B8C4C2'}
            onClick={decrementPage}
          />
        }
      />
      <PaginationText>
        <strong>
          {currentPage}/{totalPages}
        </strong>
      </PaginationText>
      <PaginationButton
        aria-label="Forward Page"
        disabled={!canIncrementPage}
        glyph={
          <PaginationButtonIcon
            glyph="ChevronRight"
            fill={canIncrementPage ? '#3D4F58' : '#B8C4C2'}
            onClick={incrementPage}
          />
        }
      />
    </PaginationContainer>
  );
};

export default Pagination;