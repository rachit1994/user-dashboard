import { FC } from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import App from './App.component';

const Routes:FC<{}> = () => (
    <Switch>
        <Route path='/' component={App}/>
    </Switch>
);

export default Routes;
