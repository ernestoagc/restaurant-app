import React from 'react'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch,useSelector } from "react-redux";


const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));

export const Loading = (props) => {


    const { children } = props;
    const classes = useStyles();

    const { loading} = useSelector( state => state.ui ); 

    return (
        <Backdrop className={classes.backdrop} open={loading} >
          <CircularProgress color="inherit" />
         </Backdrop>

    )
}
