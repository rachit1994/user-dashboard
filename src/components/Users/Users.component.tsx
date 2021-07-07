import { FC, useState, useEffect } from 'react';
import Card, { CardInterface } from 'components/Card/Card.component';
import { get, parsedQuery, stringifyQuery, addQuery } from 'utils/fetch';
import { useHistory, useLocation } from "react-router-dom";
import Pagination from "react-js-pagination";
import './index.css';

const Users:FC<{}> = () => {
    let location = useLocation();
    let history = useHistory();
    const [ options, changeOptions ]: any = useState({
        loading: true,
        data: [],
        error: false,
        total: 0
    });
    useEffect(() => {
        if(Object.keys(parsedQuery(location?.search)).length === 0) {
            const stringify = stringifyQuery({ _page: 1, limit: 10, _sort: 'Full Name', _order: 'asc' })
            history.replace(`${location.pathname}?${stringify}`)
        }
        get('users', parsedQuery(location?.search)).then(({ response, total }) => {
            changeOptions({
                loading: false,
                data: response || [],
                error: false,
                total
            })
        }).catch((err: any) => {
            changeOptions({
                loading: false,
                data: [],
                error: err,
                total: 0
            })
        })
    }, [ location?.search ]);
    
    return (
        <div className='card-container'>
            <div className='pagination-container'>
                <h3 style={{ margin: '0px 32px', lineHeight: '35px' }}>Users</h3>
                <Pagination
                    activePage={Number(parsedQuery(location?.search)?._page || 1)}
                    itemsCountPerPage={Number(parsedQuery(location?.search)?.limit || 1)}
                    totalItemsCount={options?.total}
                    pageRangeDisplayed={5}
                    onChange={(pageNumber: Number) => {
                        const newQuery = addQuery({ _page: pageNumber });
                        history.replace(`${location.pathname}?${newQuery}`)
                    }}
                />
            </div>
            {
                options?.loading && <div>Loading...</div>
            }
            {
                options?.error && <div style={{ color: 'red' }}>Some Error occurred</div>
            }
            {
                options?.data && Array.isArray(options.data) && options.data.map((user: CardInterface) => (
                    <Card {...user} key={String(user.Id)}/>
                ))
            }
        </div>
    )
};

Users.displayName = 'Users';

export default Users;
