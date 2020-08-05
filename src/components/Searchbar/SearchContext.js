import { createContext } from 'react';

// Simple context to pass search results to children
const SearchContext = createContext({
  searchFilter: null,
  setSearchFilter: null,
  searchTerm: '',
  shouldAutofocus: false,
});

export default SearchContext;
