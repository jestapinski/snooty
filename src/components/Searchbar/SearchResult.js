import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const SearchResultLink = styled('a')`
  text-decoration: none;
  :hover,
  :focus {
    text-decoration: none;
  }
`;

const SearchResultContainer = styled('div')`
  display: block;
  max-height: 100%;
  height: 100%;
`;

const truncate = maxLines => css`
  display: -webkit-box;
  -webkit-line-clamp: ${maxLines}; /* supported cross browser */
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const SearchResult = React.memo(({ maxLines = 2, preview, title, url }) => (
  <SearchResultLink href={url}>
    <SearchResultContainer>
      <p>
        <strong>{title}</strong>
      </p>
      <p css={truncate(maxLines)}>{preview}</p>
    </SearchResultContainer>
  </SearchResultLink>
));

export default SearchResult;
