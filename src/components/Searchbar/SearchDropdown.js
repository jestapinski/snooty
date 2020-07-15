import React from 'react';
import { css, keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { uiColors } from '@leafygreen-ui/palette';
import { theme } from '../../theme/docsTheme';

const SEARCH_RESULTS_DESKTOP_HEIGHT = 368;
const SEARCH_FOOTER_DESKTOP_HEIGHT = theme.size.xlarge;

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

const SearchResults = styled('div')`
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

const SearchResultsContainer = styled('div')`
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

const SearchFooter = styled('div')`
  box-shadow: 0 0 ${theme.size.tiny} 0 rgba(184, 196, 194, 0.64);
  height: ${SEARCH_FOOTER_DESKTOP_HEIGHT};
  position: relative;
  width: 100%;
  @media ${theme.screenSize.upToXSmall} {
    display: none;
  }
`;

const SearchDropdown = () => (
  <SearchResultsContainer>
    <SearchResults />
    <SearchFooter />
  </SearchResultsContainer>
);

export default SearchDropdown;
