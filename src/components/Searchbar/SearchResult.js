import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const SearchResultLink = styled('a')`
  color: #494747;
  text-decoration: none;
  :hover,
  :focus {
    color: #494747;
    text-decoration: none;
  }
`;

const SearchResultContainer = styled('div')`
  :hover,
  :focus {
    background-color: #d8d8d8;
    transition: background-color 150ms ease-in;
  }
`;

const truncate = maxLines => css`
  display: -webkit-box;
  -webkit-line-clamp: ${maxLines}; /* supported cross browser */
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const SearchResult = React.memo(({ maxLines = 2, preview, title, url, ...props }) => (
  <SearchResultLink href={url}>
    <SearchResultContainer {...props}>
      <p css={truncate(1)}>
        <strong>{title}</strong>
      </p>
      <p css={truncate(maxLines)}>{preview}</p>
    </SearchResultContainer>
  </SearchResultLink>
));

export default SearchResult;
