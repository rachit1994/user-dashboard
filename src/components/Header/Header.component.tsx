import { FC, ReactNode } from 'react';
import './index.css';

const Header: FC<{ children: ReactNode }> = ({ children }) => (
    <header className='header border-bottom'>
        {children}
    </header>
);

export default Header;
