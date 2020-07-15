import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../theme/docsTheme';
import Pagination from './Pagination';

const SEARCH_FOOTER_DESKTOP_HEIGHT = theme.size.xlarge;

const SearchFooterContainer = styled('div')`
  box-shadow: 0 0 ${theme.size.tiny} 0 rgba(184, 196, 194, 0.64);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${SEARCH_FOOTER_DESKTOP_HEIGHT};
  padding-left: 24px;
  padding-right: 24px;
  position: relative;
  width: 100%;
  @media ${theme.screenSize.upToXSmall} {
    display: none;
  }
`;

const SearchFooter = ({ currentPage, setCurrentPage, totalPages }) => {
  return (
    <SearchFooterContainer>
      <a href="#">Advanced Filters</a>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
    </SearchFooterContainer>
  );
};

export default SearchFooter;
