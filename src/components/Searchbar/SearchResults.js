import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../theme/docsTheme';
import SearchResult from './SearchResult';

const SEARCHBAR_HEIGHT = 36;
const SEARCH_RESULTS_DESKTOP_HEIGHT = 368;
const SEARCH_FOOTER_DESKTOP_HEIGHT = theme.size.xlarge;

const SearchResultsContainer = styled('div')`
  box-shadow: 0 0 ${theme.size.tiny} 0 rgba(184, 196, 194, 0.48);
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr 1fr 1fr;
  height: ${SEARCH_RESULTS_DESKTOP_HEIGHT}px;
  position: relative;
  /* Give top padding on desktop to offset this extending into the searchbar */
  padding-top: ${theme.size.default};
  width: 100%;
  @media ${theme.screenSize.upToXSmall} {
    box-shadow: none;
    /* On mobile, let the dropdown take the available height */
    height: calc(100% - ${SEARCH_FOOTER_DESKTOP_HEIGHT} - ${SEARCHBAR_HEIGHT}px);
    padding-top: 0;
  }
`;

const SearchResults = ({ visibleResults }) => (
  <SearchResultsContainer>
    {visibleResults.map(({ title, preview, url }) => (
      <SearchResult title={title} preview={preview} url={url} />
    ))}
  </SearchResultsContainer>
);

export default SearchResults;
