import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react'
import Menu from '@material-ui/core/Menu';

import MenuItem from '@material-ui/core/MenuItem';

import { makeStyles } from '@material-ui/core/styles';
export const Navbar = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
        },
      }));

      const classes = useStyles();

      const [anchorEl, setAnchorEl] = React.useState(null);

      

    return (
    
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          Restauranr App
          </Typography>

        
        
        </Toolbar>
         </AppBar>

    )
}
