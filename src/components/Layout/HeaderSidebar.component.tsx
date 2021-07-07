import { FC, Children } from 'react';
import Header from 'components/Header/Header.component';
import Sidebar from 'components/Sidebar/Sidebar.component';
import Content from 'components/Content/Content.component';

const displayNames = {
    Search: 'Search',
    Filters: 'Filters',
    Users: 'Users'
}

const HeaderSidebar: FC<{ children: JSX.Element[] }> = ({ children }) => {
    let Search = null;
    let Filters = null;
    let Users = null;
    Children.forEach(children, (child: any) => {
        if(child?.type?.displayName === displayNames.Search) {
            Search = child;
        } else if(child?.type?.displayName === displayNames.Filters) {
            Filters = child;
        } else if(child?.type?.displayName === displayNames.Users) {
            Users = child;
        }
    });
    return (
        <>
            <Header>
                {Search}
            </Header>
            <div className='content-with-sidebar'>
                <Sidebar>
                    Filters
                    {Filters}
                </Sidebar>
                <Content>
                    Users
                    {Users}
                </Content>
            </div>
        </>
    )
};

export default HeaderSidebar;
