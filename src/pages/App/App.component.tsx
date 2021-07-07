import { FC } from 'react';
import Search from 'components/Search/Search.component';
import Layout from 'components/Layout';
import Users from 'components/Users/Users.component';
import Filter from 'components/Filter/Filter.component';
import './index.css';

const App:FC<{}> = () => {
    return (
        <Layout>
            <Search />
            <Users />
            <Filter />
        </Layout>
    )
};

export default App;
