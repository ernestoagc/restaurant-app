import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RestaurantItem } from "./RestaurantItem";
import { getRestaurants } from "../../actions/restaurantAction";
import AddIcon from '@material-ui/icons/Add';
import Controls from "../../components/controls/Controls";

import Grid from "@material-ui/core/Grid";

export const RestaurantList = () => {
  const { restaurants, loading } = useSelector((state) => state.restaurant);
  const dispatch = useDispatch();

 

  //dispatch(getRestaurants());
  
    useEffect(() => {
        
        console.log("CargaRestaurantList");
        dispatch(getRestaurants());

    

    }, [  ]);


  return restaurants && restaurants.length > 0 ? ( 

    


    <Grid container spacing={3}> {
    restaurants.map((restaurant) => (
  
        <Grid key={restaurant.id} item xs={12} sm={12} md={6}>
          <RestaurantItem key={restaurant.id} {...restaurant} />
        </Grid>
    ))
}
    </Grid>

  ) : (
    <p></p>
  ); 
};
