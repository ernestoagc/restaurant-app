import React, { useContext } from 'react'


import {
    BrowserRouter as Router,
    Route,
    Switch,Redirect
  } from 'react-router-dom';
import { Login } from '../components/auth/Login';
import { RestaurantRoutes } from './RestaurantRoutes';


export const AppRouter = () => {
    return (
        <div>
            <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route path ="/"  component={RestaurantRoutes} />

                </Switch>
                </div>
            </Router>
        </div>
    )
}
