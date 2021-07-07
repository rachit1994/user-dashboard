import { FC, ChangeEvent } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import debounce from 'utils/debounce';
import { addQuery, parsedQuery } from 'utils/fetch';
import { useHistory, useLocation } from "react-router-dom";
import './index.css';

const Filter: FC<{}> = () => {
    let location = useLocation();
    let history = useHistory();
    return (
        <div className='filters'>
            <div className='title'>Filters</div>
            <div className='components'>
                <input
                    placeholder='Filter by country'
                    type='search'
                    onChange={debounce((event: ChangeEvent<HTMLInputElement>) => {
                        const newQuery = addQuery({ Country: event?.target?.value });
                        history.replace(`${location.pathname}?${newQuery}`)
                    }, 1000)}
                    defaultValue={parsedQuery(location?.search)?.Country ? String(parsedQuery(location?.search)?.Country) : ''}
                />
                <DatePicker
                    onChange={(date) => {
                        if(date) {
                            const newQuery = addQuery({ 'Date of birth': new Date(String(date)).toISOString() });
                            history.replace(`${location.pathname}?${newQuery}`)
                        } else {
                            const newQuery = addQuery({ 'Date of birth': null });
                            history.replace(`${location.pathname}?${newQuery}`)
                        }
                    }}
                    placeholderText='Filter by Date'
                    isClearable
                    closeOnScroll
                    showYearDropdown
                    scrollableYearDropdown
                    selected={
                        parsedQuery(location?.search)['Date of birth'] ?
                        new Date(String(parsedQuery(location?.search)['Date of birth'])) :
                        null
                    }
                />
            </div>
        </div>
    )
};

Filter.displayName = 'Filters';

export default Filter;
