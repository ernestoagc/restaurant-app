import React from 'react'
import { Link,useRouteMatch } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import RoomIcon from '@material-ui/icons/Room';
import { red } from '@material-ui/core/colors';
import EmailIcon from '@material-ui/icons/Email';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

import Chip from '@material-ui/core/Chip';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import RestaurantIcon from '@material-ui/icons/Restaurant';



const useStyles = makeStyles((theme) => ({
   
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    iconWidth:{
        minWidth:"20px",
    },
    listItem:{
        paddingLeft:"0px",
    },

    imageWidth:{
      maxWidth: 420,
    },
  }));
  


export const RestaurantItem = ({id,code,name, address, dishesCount, urlImage,email}) => {
  let { path, url } = useRouteMatch();
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
 

    return (
      
<Card >

  
          <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image=
          {   
            urlImage!==null || urlImage!=undefined?
            urlImage : "https://i2.wp.com/www.alphr.com/wp-content/uploads/2018/08/How-to-fix-the-Lenovo-webcam-not-working-issue1.jpg"
          }          
          title="Contemplative Reptile"
        />


      <CardContent>
      <Chip size="small" label={code} color="primary"/>
          <Typography gutterBottom variant="h6" component="h6">
          {name}
          </Typography>
          <Typography variant="body2" component="p">
         
          <EmailIcon fontSize="small" />  {email}
          <br />
          <RestaurantMenuIcon fontSize="small" /> total dishes: {dishesCount}
          
        </Typography>
        </CardContent>

        <Divider />
      
      <CardActions>
      <Link to={ `${url}/${ id }` }>     

      <IconButton color="primary"  component="span">
      <EditIcon   />
            </IconButton>



        </Link>
      </CardActions>
    </Card>



    )
}