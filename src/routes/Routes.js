import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RoutesPath from '../constants/routes-path';

import Analytics from './Analytics';

import HomePage from '../pages/Home';

const Routes = () => (
    <BrowserRouter>
        <Analytics>
            <Switch>
                <Route exact path={RoutesPath.HOME.PATH} component={HomePage} />
            </Switch>
        </Analytics>
    </BrowserRouter>
);

export default Routes;
