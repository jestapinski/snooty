import React from 'react';
import styled from '@emotion/styled';

const SearchResultContainer = styled('div')`
  display: block;
`;

const SearchResult = React.memo(({ preview, title, url }) => (
  <SearchResultContainer>
    <p>Title: {title}</p>
    <p>Preview: {preview}</p>
    <p>Url: {url}</p>
  </SearchResultContainer>
));

export default SearchResult;
