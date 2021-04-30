import React from 'react'
import {
    Switch, Route, Redirect 
  } from 'react-router-dom';
import { RestaurantIndex } from '../pages/Restaurant/RestaurantIndex';
import { RestaurantDetail } from '../pages/Restaurant/RestaurantDetail';
import { Navbar } from '../components/shared/Navbar'

export const RestaurantRoutes = () => {
    return (
        <>
            <Navbar />
            <div>
            <Switch>
                <Route exact path="/restaurant" component={RestaurantIndex} />
                <Route exact path="/restaurant/:restaurantId" component={ RestaurantIndex} />
                <Route exact path="/restaurant/new" component={ RestaurantIndex } />
            </Switch>
            </div>
        </>
    )
}
