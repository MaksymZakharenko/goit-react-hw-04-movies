const parseQueryString = (query = {}) => {
  const queryStr = new URLSearchParams(query);
  return Object.fromEntries(queryStr.entries());
};

export default parseQueryString;
