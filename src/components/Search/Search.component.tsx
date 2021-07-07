import { FC } from 'react';
import debounce from 'utils/debounce';
import './index.css';

const Search:FC<{ onChange: (...args: any[]) => any }> = ({ onChange }) => (
    <input
        type='search'
        placeholder='Search'
        className='search'
        autoFocus
        onChange={debounce(onChange, 2000)}
    />
);

Search.displayName = 'Search';
export default Search;
