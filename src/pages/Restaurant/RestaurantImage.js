import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PublishIcon from '@material-ui/icons/Publish';
import Controls from "../../components/controls/Controls";
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import {PhotoCamera} from '@material-ui/icons';

import Divider from '@material-ui/core/Divider';

import { useDispatch,useSelector } from "react-redux";

import { restaurantUploadFile} from "../../actions/restaurantAction";

//restaurantUploadFile


const useStyles = makeStyles((theme) =>   ({
    root: {
        width:"100%",
    },
    rootIconCamara: {
      justifyContent: 'center'
    },
    input:{
        display:"none",
    },
    media: {
      height: 0,
       height: 140,
    },

    buttonImage:{
        width:"100%",
    },
  }));


const RestaurantImage = (props) => {
  const { setChangePicture ,imageData, setImageData,
     imagePreview, setImagePreview, nameComponent} = props;

  const dispatch = useDispatch();

    const handleUploadClick= event=>{
     
        let file = event.target.files[0];
        const imageData = new FormData();
        imageData.append('imageFile', file);

        /*
        setFileInput(event.target.files[0]);
        const imageData = new FormData();
        imageData.append('imageFile', fileInput);
        */
        
        setImageData(imageData);
        setImagePreview(URL.createObjectURL(file));
        setChangePicture(true);
    }

    const uploadImageWithAdditionalData = () => {
      //imageData.append('imageName', imageName);
      dispatch(restaurantUploadFile(imageData));
  };
    
  const classes = useStyles(); 

    return (
        <Card className={classes.root}>
            <CardContent>
            <CardMedia 
          component="img"
              alt="Contemplative Reptile"
              height="240" 
              image={
                imagePreview !== null ?
                    imagePreview :
                    "https://i2.wp.com/www.alphr.com/wp-content/uploads/2018/08/How-to-fix-the-Lenovo-webcam-not-working-issue1.jpg"}
              title="Contemplative Reptile"
            />


            </CardContent>
            <Divider />
          <CardActions className={classes.rootIconCamara}>
          <input
                        accept="image/*"
                        className={classes.input}
                        id={nameComponent}
                        type="file"
                        onChange={handleUploadClick}
                    />

           

            <label htmlFor={nameComponent}>
            <IconButton color="primary" aria-label="upload picture" component="span">
              <PhotoCamera />
            </IconButton>
           </label>


          
          </CardActions>
        </Card>
      );
}

export default RestaurantImage
