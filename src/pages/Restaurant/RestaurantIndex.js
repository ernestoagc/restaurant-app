import React, { useEffect } from "react";
import { RestaurantList } from "./RestaurantList";
import PageHeader from "../../components/shared/PageHeader";
import { RestaurantDetail } from "./RestaurantDetail";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { useParams, Redirect } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import Controls from "../../components/controls/Controls";
import { Link,useRouteMatch } from 'react-router-dom'

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container"; 
import RestaurantIcon from '@material-ui/icons/Restaurant';
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
   
  },
  pageContent: {
    flexDirection: "row",
    marginTop: "10px",
    background: "rgb(0, 0, 0,0)"
  },
}));

export const RestaurantIndex = (props) => {

  
  const {location} = props;
  const classes = useStyles();
  let { path, url } = useRouteMatch();
  const { restaurantId } = useParams();
  

let renderMain;
let showNewButton=false;
  
  if (restaurantId) {    
    renderMain = <RestaurantDetail isNew={  restaurantId.includes("new")?true:false } />;
  } else {
    showNewButton=true;
    renderMain =  ( 
      <RestaurantList/> 
      );
  }

  return (
    <Container fixed direction="column" className={classes.root}>
      
      <PageHeader
                title="Restaurants"
                showNewButton={showNewButton}
                urlNew={`${url}/new`}
                subTitle="Managed the restauranst"
                icon={<RestaurantIcon fontSize="large" 
                />}
            />
      <Paper className={classes.pageContent} elevation={0}>

      {renderMain}
          

       
      </Paper>
    </Container>
  );
};
