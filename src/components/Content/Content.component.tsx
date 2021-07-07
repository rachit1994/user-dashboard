import { FC, ReactNode } from 'react';
import './index.css';

const Content: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className='content'>
            {children}
        </div>
    )
};

export default Content;
