import React, { useMemo, useState } from 'react';
import { css, keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { uiColors } from '@leafygreen-ui/palette';
import { theme } from '../../theme/docsTheme';
import SearchFooter from './SearchFooter';
import SearchResults from './SearchResults';

const RESULTS_PER_PAGE = 3;

const animationKeyframe = startingOpacity => keyframes`
    0% {
      opacity: ${startingOpacity};
    }
    100% {
      opacity: 1;
    }
`;

const fadeInAnimation = (startingOpacity, seconds) => css`
  animation: ${animationKeyframe(startingOpacity)};
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: ${seconds};
`;

const SearchDropdownContainer = styled('div')`
  background-color: #ffffff;
  border-radius: 0 0 ${theme.size.tiny} ${theme.size.tiny};
  opacity: 1;
  position: absolute;
  top: ${theme.size.default};
  width: 100%;
  z-index: -1;
  ${fadeInAnimation(0, '0.2s')};
  @media ${theme.screenSize.upToXSmall} {
    background-color: ${uiColors.gray.light3};
    bottom: 0;
    top: 40px;
  }
`;

const SearchDropdown = ({ results, searchTerm }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = useMemo(() => (results ? Math.ceil(results.length / RESULTS_PER_PAGE) : 0), [results]);
  const visibleResults = useMemo(() => {
    if (!results) return [];
    const start = (currentPage - 1) * RESULTS_PER_PAGE;
    const end = currentPage * RESULTS_PER_PAGE;
    return results.slice(start, end);
  }, [currentPage, results]);
  return (
    <SearchDropdownContainer>
      <p strong>Most relevant results ({results ? results.length : 0})</p>
      <SearchResults searchTerm={searchTerm} visibleResults={visibleResults} />
      <SearchFooter currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
    </SearchDropdownContainer>
  );
};

export default SearchDropdown;
