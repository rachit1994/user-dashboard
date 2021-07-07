import queryString from 'query-string';
const BASE_URL="http://localhost:5000";

export const get = async (url: string, filters: Record<string, any>) => {
    const response = await fetch(`${BASE_URL}/${url}?${queryString.stringify(filters)}`);
    const total = response.headers.get('X-Total-Count');
    const data = await response.json();
    return { response: data, total }
}

// export const getQuery = () => {
//     const parsed = queryString.parse(window.location.search);

// }

export const parsedQuery = (search: string) => queryString.parse(search);
export const stringifyQuery = (filters: Record<string, any>) => queryString.stringify(filters);
export const addQuery = (filters: Record<string, any>) => {
    const parsed = queryString.parse(window.location.search);
    Object.keys(filters).forEach((key: string) => {
        parsed[key] = filters[key];
        if(!parsed[key]) {
            delete parsed[key];
        }
    });
    return queryString.stringify(parsed);
}