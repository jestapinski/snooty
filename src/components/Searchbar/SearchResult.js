import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { theme } from '../../theme/docsTheme';

const LINK_COLOR = '#494747';
const RESULT_HOVER_COLOR = '#d8d8d8';

// Truncates text to a maximum number of lines
const truncate = maxLines => css`
  display: -webkit-box;
  -webkit-line-clamp: ${maxLines}; /* supported cross browser */
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const MobileFooterContainer = styled('div')`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
`;

const LearnMoreLink = styled('a')`
  font-size: 14px;
  letter-spacing: 0.5px;
  line-height: ${theme.size.default};
`;

const SearchResultContainer = styled('div')`
  :hover,
  :focus {
    background-color: ${RESULT_HOVER_COLOR};
    transition: background-color 150ms ease-in;
  }
  @media ${theme.screenSize.upToXSmall} {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

const SearchResultLink = styled('a')`
  color: ${LINK_COLOR};
  height: 100%;
  text-decoration: none;
  :hover,
  :focus {
    color: ${LINK_COLOR};
    text-decoration: none;
  }
`;

const StyledPreviewText = styled('p')`
  font-family: Akzidenz;
  font-size: 14px;
  letter-spacing: 0.5px;
  line-height: 20px;
  margin-bottom: 0;
  margin-top: 0;
  ${({ maxLines }) => truncate(maxLines)};
`;

const StyledResultTitle = styled('p')`
  font-family: Akzidenz;
  font-size: 14px;
  font-weight: bolder;
  line-height: ${theme.size.medium};
  letter-spacing: 0.5px;
  height: ${theme.size.medium};
  margin-bottom: 6px;
  margin-top: 0;
  ${truncate(1)};
  @media ${theme.screenSize.upToXSmall} {
    font-size: 16px;
    line-height: ${theme.size.medium};
    font-weight: 300;
  }
`;

const SearchResult = React.memo(({ learnMoreLink = false, maxLines = 2, preview, title, url, ...props }) => (
  <SearchResultLink href={url} {...props}>
    <SearchResultContainer>
      <StyledResultTitle>{title}</StyledResultTitle>
      <StyledPreviewText maxLines={maxLines}>{preview}</StyledPreviewText>
      {learnMoreLink && (
        <MobileFooterContainer>
          <LearnMoreLink url={url}>
            <strong>Learn More</strong>
          </LearnMoreLink>
        </MobileFooterContainer>
      )}
    </SearchResultContainer>
  </SearchResultLink>
));

export default SearchResult;
