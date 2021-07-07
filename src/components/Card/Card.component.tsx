import { FC } from 'react';
import './index.css';

export interface CardInterface {
    Country: string;
    "Date of birth": string;
    Email: string;
    "Full Name": string;
    Id: Number;
}
const Card: FC<CardInterface> = (props) => (
    <div className='card'>
        <div>
            Name: {props['Full Name']}
        </div>
        <div>
            Country: {props['Country']}
        </div>
        <div>
            Date of birth: {props['Date of birth']}
        </div>
        <div>
            Email: {props['Email']}
        </div>
    </div>
);

export default Card;