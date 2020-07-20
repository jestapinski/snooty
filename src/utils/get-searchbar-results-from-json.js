export const getSearchbarResultsFromJSON = resultJSON =>
  resultJSON.results.map(r => ({ ...r, title: r.title.split(' —')[0] }));
