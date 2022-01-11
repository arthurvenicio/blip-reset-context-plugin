import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RoutesPath from '../constants/routes-path';

import Analytics from './Analytics';

const HomePage = lazy(() => import('../pages/Home'));
// import HomePage from '../pages/Home';

const Routes = () => (
    <BrowserRouter>
        <Analytics>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route
                        exact
                        path={RoutesPath.HOME.PATH}
                        component={HomePage}
                    />
                </Switch>
            </Suspense>
        </Analytics>
    </BrowserRouter>
);

export default Routes;
