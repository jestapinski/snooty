import React, { useCallback } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Button from '@leafygreen-ui/button';
import Icon from '@leafygreen-ui/icon';
import { theme } from '../../theme/docsTheme';

const BUTTON_SIZE = theme.size.medium;

const PaginationButton = styled(Button)`
  background-color: #fff;
  border-radius: ${BUTTON_SIZE};
  height: ${BUTTON_SIZE};
  /* button is 24 px and entire container is 36px so 6px top gives equal spacing */

  width: ${BUTTON_SIZE};
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
  /* This icon is 16px tall in a 24 px button, so 4px gives equal spacing */
  left: ${theme.size.tiny};
  top: ${theme.size.tiny};
  position: absolute;
`;

const PaginationContainer = styled('div')`
  display: flex;
`;

const PaginationText = styled('p')`
  margin-bottom: 0;
  line-height: 22px;
`;

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const decrementPage = useCallback(() => setCurrentPage(currentPage - 1), [currentPage, setCurrentPage]);
  const incrementPage = useCallback(() => setCurrentPage(currentPage + 1), [currentPage, setCurrentPage]);
  return (
    <PaginationContainer>
      <PaginationButton
        aria-label="Back Page"
        disabled={currentPage === 1}
        glyph={<PaginationButtonIcon glyph="ChevronLeft" fill="#3D4F58" onClick={decrementPage} />}
      />
      <PaginationText>
        <strong>
          {currentPage}/{totalPages}
        </strong>
      </PaginationText>
      <PaginationButton
        aria-label="Forward Page"
        disabled={currentPage >= totalPages}
        glyph={<PaginationButtonIcon glyph="ChevronRight" fill="#3D4F58" onClick={incrementPage} />}
      />
    </PaginationContainer>
  );
};

export default Pagination;
