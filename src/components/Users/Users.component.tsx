import { FC, useState, useEffect } from 'react';
import Card, { CardInterface } from 'components/Card/Card.component';
import { get } from 'utils/fetch';
import './index.css';

const Users:FC<{}> = () => {
    const [ options, changeOptions ] = useState({
        loading: false,
        data: [],
        error: false
    });
    console.log('coming herewww')
    useEffect(() => {
        console.log('coming here')
        get('users', { _page: 1, limit: 10 }).then((res) => {
            console.log('coming in users', res);
            changeOptions({
                loading: false,
                data: res,
                error: false
            })
        })
    }, [ options ])
    return (
        <div className='card-container'>
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
