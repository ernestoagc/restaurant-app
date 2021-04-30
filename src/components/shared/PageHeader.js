import React from 'react'
import { Paper, Card, Typography, makeStyles, Button } from '@material-ui/core'
import { Grid } from "@material-ui/core";
import {SaveIcon} from '@material-ui/icons/Save';
import Controls from "../../components/controls/Controls";
import { Link,useRouteMatch } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add';
const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fdfdff'
    },
     btnAction: {
        justifyContent: 'ritgh'
      },
    pageHeader:{
        padding:theme.spacing(2),
        display:'flex',
        marginBottom:theme.spacing(1)
    },
    pageIcon:{
        display:'inline-block',
        padding:theme.spacing(1),
        color:'#3c44b1'
    },
    pageTitle:{
        paddingLeft:theme.spacing(4),
        '& .MuiTypography-subtitle2':{
            opacity:'0.6'
        }
    }
}))

export default function PageHeader(props) {

    const classes = useStyles();
    const { title, subTitle, icon, showNewButton,urlNew } = props;
    return (
        <Paper elevation={0} square className={classes.root}>
            <div className={classes.pageHeader}>

            <Grid container >
            <Grid container item xs={12} >
            <Grid item xs={1} >
            <Card className={classes.pageIcon}>
                    {icon}
                </Card>
              
            </Grid> 
            <Grid item xs={9} >
            <div className={classes.pageTitle}>
                    <Typography
                        variant="h6"
                        component="div">
                        {title}</Typography>
                    <Typography
                        variant="subtitle2"
                        component="div">
                        {subTitle}</Typography>
                </div>
                </Grid> 

            <Grid item xs={2} >
            {showNewButton?
            
             (<Link to={ urlNew }>  <Controls.Button
                        text="New"
                        variant="outlined"
                        startIcon={<AddIcon />}
                       />  </Link>):"" }
            

            </Grid> 


            </Grid>
              
              

          </Grid>

            </div>
        </Paper>
    )
}
