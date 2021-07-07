import { FC, ChangeEvent } from 'react';
import Search from 'components/Search/Search.component';
import Layout from 'components/Layout';
import Users from 'components/Users/Users.component';
import './index.css';

const App:FC<{}> = () => {
    const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
        console.log('coming in hand', event?.target?.value);
    }
    return (
        <Layout>
            <Search onChange={handleSearch}/>
            <Users />
        </Layout>
    )
};

export default App;
