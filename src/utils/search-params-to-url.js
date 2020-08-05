// Search helper function to generate marian URL from params and filters
const MARIAN_URL = 'https://marian.mongodb.com';
export const searchParamsToURL = (searchQuery, searchFilters) =>
  `${MARIAN_URL}/search?q=${searchQuery}${searchFilters ? `&searchProperty=${searchFilters}` : ''}`;
