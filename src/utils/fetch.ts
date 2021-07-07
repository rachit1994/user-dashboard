import queryString from 'query-string';
const BASE_URL="http://localhost:5000";

export const get = (url: string, filters: Record<string, any>) =>
fetch(`${BASE_URL}/${url}?${queryString.stringify(filters)}`).then(response => response.json())

// export const getQuery = () => {
//     const parsed = queryString.parse(window.location.search);

// }