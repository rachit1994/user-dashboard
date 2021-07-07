import { FC, ReactNode } from 'react';
import './index.css';

const Sidebar: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <nav className='sidebar border-bottom'>
            {children}
        </nav>
    )
};

export default Sidebar;
