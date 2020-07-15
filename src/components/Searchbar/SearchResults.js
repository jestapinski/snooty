import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../theme/docsTheme';

const SEARCH_RESULTS_DESKTOP_HEIGHT = 368;
const SEARCH_FOOTER_DESKTOP_HEIGHT = theme.size.xlarge;

const SearchResultsContainer = styled('div')`
  box-shadow: 0 0 ${theme.size.tiny} 0 rgba(184, 196, 194, 0.48);
  height: ${SEARCH_RESULTS_DESKTOP_HEIGHT}px;
  position: relative;
  /* Give top padding on desktop to offset this extending into the searchbar */
  padding-top: ${theme.size.default};
  width: 100%;
  @media ${theme.screenSize.upToXSmall} {
    /* On mobile, let the dropdown take the available height */
    box-shadow: 0 0 0 0;
    height: calc(100% - ${SEARCH_FOOTER_DESKTOP_HEIGHT} - 36px);
    padding-top: 0;
  }
`;

const SearchResults = ({ visibleResults }) => {
  return <SearchResultsContainer></SearchResultsContainer>;
};

export default SearchResults;