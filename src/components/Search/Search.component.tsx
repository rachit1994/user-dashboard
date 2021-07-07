import { FC, ChangeEvent } from 'react';
import debounce from 'utils/debounce';
import { addQuery, parsedQuery } from 'utils/fetch';
import { useHistory, useLocation } from "react-router-dom";
import './index.css';

const Search: FC<{}> = () => {
    let location = useLocation();
    let history = useHistory();
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newQuery = addQuery({ q: event?.target?.value });
        history.replace(`${location.pathname}?${newQuery}`)
    }
    return (
        <input
            type='search'
            placeholder='Search'
            className='search'
            autoFocus
            onChange={debounce(onChange, 1000)}
            defaultValue={parsedQuery(location?.search)?.q ? String(parsedQuery(location?.search)?.q) : ''}
        />
    )
};

Search.displayName = 'Search';
export default Search;
