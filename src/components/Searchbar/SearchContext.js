import { createContext } from 'react';

const SearchContext = createContext({
  searchFilter: null,
  setSearchFilter: null,
  searchTerm: '',
  shouldAutofocus: false,
});

export default SearchContext;
