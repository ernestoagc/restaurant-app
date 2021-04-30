import React,{useState,useEffect} from "react";
import {useForm,Form} from  '../../hooks/useForm'

import { useParams, Redirect, useHistory } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Controls from "../../components/controls/Controls";
import Popup from "../../components/shared/Popup";
import { Grid } from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';

import { Table, TableBody,TableRow, TableCell } from '@material-ui/core'
import useTable from '../../hooks/useTable'
import RestaurantDishItem from './RestaurantDishItem'
import { useDispatch,useSelector } from "react-redux";
import { dishAdd ,restaurantSave,restaurantNew,dishDelete,restuarntGetDetail} from "../../actions/restaurantAction";


import { uiShowMessage} from "../../actions/uiAction";


import RestaurantImage from './RestaurantImage'
import Avatar from '@material-ui/core/Avatar';


import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';

import CardHeader from '@material-ui/core/CardHeader';

import useFormData from '../../hooks/useFormData';

const initialValues = {
  id:"",
  code:"",
  name:"",
  email:"",
  address:"",
  imageUrl:null}

const useStyles = makeStyles((theme) => ({
    root: {
      padding: "4px",
    },
    sectionItem: {marginTop:"20px",
    },
    
    imageDish: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      justifyContent:"right",
    },
    sectionImage: {
      padding:"10px",
      margin: theme.spacing(1),
    },
  }));

  const headCells = [
    { id: 'picture', label: 'Picture' },
    { id: 'name', label: 'Name' },
    { id: 'cost', label: 'Cost' },
    { id: 'action', label: 'Actions' }
]

export const RestaurantDetail = (props) => {

  
const classes = useStyles();
const { restaurantId } = useParams();
const { isNew } = props;
let history = useHistory(); 


let [changePicture,setChangePicture] =useState(false);
let [imageData, setImageData] = useState(null);
let [imagePreview, setImagePreview] = useState(null);

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('code' in fieldValues)
        temp.code = fieldValues.code ? "" : "This field is required."
    if ('name' in fieldValues)
    temp.name = fieldValues.name ? "" : "This field is required."        
    if ('email' in fieldValues)
        temp.email = fieldValues.email.length != 0 ? "" : "This field is required."
    setErrors({
        ...temp
    })

    if (fieldValues == values)
        return Object.values(temp).every(x => x == "")
}


  const { dishes:dishesTemp,  restaurantDetail:restaurantDetail , loading:loadingRestaurant } = useSelector( state => state.restaurant ); 
  const  {name,code,address,email,urlImage} = restaurantDetail;
  

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
    loadForm
  } = useForm(restaurantDetail , true, validate);
  
  
  const [isNewRestaurant, setIsNewRestaurant] = useState(true);


useEffect(  async () => {  
  if(!restaurantId.includes("new")){
    await dispatch(restuarntGetDetail(restaurantId));
    setIsNewRestaurant(false);
  } 

  
  console.log(isNewRestaurant);
},[]);




  const [openPopup, setOpenPopup] = useState(false);
  const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })  
    const dispatch = useDispatch();

const [pictureDishes,setPictureDiches] = useState([]);
      
useEffect( async () => { 

  console.log("===>isNewRestaurant");
  console.log(isNewRestaurant);

if(isNewRestaurant){
  dispatch(restaurantNew());
}

  setImagePreview(urlImage);
 


  setValues({...restaurantDetail});

  dishesTemp.forEach(x=> {
    addFormDataValue(new FormData(),x.id);
  });


},[isNewRestaurant]);


    let rows = [];
    const {TblContainer, TblHeader} =useTable(dishesTemp,headCells);

    const exampleSave =() =>{

      console.log(pictureDishes);
      console.log("===>formDataValues");
      console.log(formDataValues);
    }

    const addDish= async (dish, resetForm,changePicture,imageData) => {     

      if(imageData){
        addFormDataValue(imageData,dish.id);
        
        setPictureDiches([ ...pictureDishes,imageData]); 
        console.log(formDataValues);


      }

      
      dispatch(dishAdd(dish));
      resetForm();
      setOpenPopup(false) ;
      console.log("XXX====Length>"+dishesTemp.length);
      console.log("pictureDishes====Length>"+pictureDishes.length);
  }


  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
    //  values.dishes=dishesTemp;
      saveRestaurant(values,resetForm,loadForm,dishesTemp,pictureDishes);
    }
  }


  const  {formDataValues,setFormDataValues,addFormDataValue,deleteFormDataValue,getFormDataValue,getImagePreviewTemp }  = useFormData();

  const saveRestaurant = async (restaurant,resetForm,loadForm,dishesTemp,pictureDishes)=>{


   await dispatch(restaurantSave(restaurant,changePicture,imageData,dishesTemp,formDataValues,getFormDataValue));    
    resetForm();
    dispatch(uiShowMessage("Submitted Successfully","success"));
    history.push('/restaurant');
    
    setValues({...restaurant});
  }


  const deleteDish = (dishItem) =>{
    dispatch(dishDelete(dishItem.id));

   // pictureDishes.forEach( forDish =>console.log(forDish.get("idDish")));
    
   // setPictureDiches(pictureDishes.filter( forDish =>forDish.get("idDish")!==dishItem.id ));

    deleteFormDataValue(dishItem.id);
  }


  
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Grid 
  direction="row" container  spacing={2} >

          
          <Grid item xs={12} sm={6}>

            
              <Card >
              <CardHeader 
       subheader="General information"
      />
  <Divider />

              <CardContent>
              <Controls.Input name="code" label="Code" 
                                      value={values.code}
                                      onChange={handleInputChange}
                                      error={errors.code} />

                          <Controls.Input name="name" label="Name" 
                                      value={values.name}
                                      onChange={handleInputChange}
                                      error={errors.name} />

                          <Controls.Input name="email" label="email" 
                                      value={values.email}
                                      onChange={handleInputChange}
                                      error={errors.email}/>
              </CardContent>
              </Card>
          </Grid>
            <Grid item xs={12} sm={6}>
                    <Grid container justify="center" alignItems="center">
                    <RestaurantImage nameComponent="unoFile" imagePreview={imagePreview} setImagePreview={setImagePreview} setChangePicture={setChangePicture} imageData={imageData} setImageData={setImageData}  />
                    
                    </Grid>

            </Grid>
        </Grid>

        
        <Grid container className={classes.sectionItem} >

        <Grid item xs={12}  >
        <Card >
              <CardHeader 
       subheader="Dishes"
      />
  <Divider />

<CardContent>
        <Controls.Button
                        text="New"
                        variant="outlined"
                        onClick={() => { setOpenPopup(true);}}
                        startIcon={<AddIcon />}
                        />
          <TblContainer>
            <TblHeader/>
            <TableBody>
                { dishesTemp ?(
                  dishesTemp.map(item=> (
                    <TableRow key={item.id}>
                                    <TableCell align="right"> <Avatar alt="Remy Sharp"
                                     src= {   
                                      item.urlImage!=null ?
                                      item.urlImage :
                                      (getImagePreviewTemp(item.id) ?getImagePreviewTemp(item.id) 
                                      :"https://i2.wp.com/www.alphr.com/wp-content/uploads/2018/08/How-to-fix-the-Lenovo-webcam-not-working-issue1.jpg"                                      
                                      )                                      
                                      
                                    }   />
  </TableCell>
                                    <TableCell align="right"> {item.name}</TableCell>
                                    <TableCell align="right">{item.price}</TableCell>
                                    <TableCell align="right">
                                    <Controls.ActionButton
                                            onClick={() => { deleteDish(item) }}>
                                            <CloseIcon fontSize="small" />
                                        </Controls.ActionButton>
                                      
                                      </TableCell>


                    </TableRow>
                  ))
                  ): <TableRow />
                }
            </TableBody>
          </TblContainer>

          </CardContent>


</Card>
          
         </Grid>
        
          
        
        </Grid>


        <Grid container spacing={1}>
          <Grid item xs={12} >
          <Controls.Button
                    name="addDish"
                    text="Save"
                    type="submit"
                    startIcon={<SaveIcon />}
                    />

                    
          </Grid>
        </Grid>




        <Grid container spacing={1}>
          <Grid item xs={6} >
          </Grid>
        </Grid>
      </Form>

            <Popup
                title="Dish Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                maxWidth="sm"
            >
                <RestaurantDishItem addDish={addDish}  />
            </Popup>



    </div>
  );
};
