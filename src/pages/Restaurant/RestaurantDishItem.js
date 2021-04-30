import React,{useState} from 'react'
import {useForm ,Form} from  '../../hooks/useForm'


import RestaurantImage from './RestaurantImage'

import uuid  from "uuid";


import Controls from "../../components/controls/Controls";
import { Grid } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
const initialValues = {
id:0,
name:"",
price:0.0}

export const RestaurantDishItem = (props) => {
    const { addDish } = props;
    
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('name' in fieldValues)
        temp.name = fieldValues.name ? "" : "This field is required."        
        if ('price' in fieldValues)
            temp.price = fieldValues.price != 0 ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()

        console.log("name: "+values.name);
        console.log("price: "+values.price);

        values.id= uuid.v4();

       
        if (validate()) {
            
            addDish(values,resetForm,changePicture,imageData);
        }
    }

    

const [changePicture,setChangePicture] =useState(false);
const [imageData, setImageData] = useState(null);
const [imagePreview, setImagePreview] = useState(null);

const [fileInput, setFileInput] = useState(null);

   

    return (
        <Form onSubmit={handleSubmit}>
             <Grid container>
                <Grid item xs={12}>
                <Controls.Input
                        name="name"
                        label="Name"
                        value={values.name}
                        onChange={handleInputChange}
                        error={errors.name}
                    />
                 <Controls.Input
                        name="price"
                        label="Price"
                        type="number"
                        value={values.price}
                        onChange={handleInputChange}
                        error={errors.price}
                    />

                </Grid>


                <Grid item xs={12}>
                    <RestaurantImage nameComponent="dosFile" imagePreview={imagePreview} setImagePreview={setImagePreview} 
                    setChangePicture={setChangePicture} imageData={imageData} setImageData={setImageData}
                    
                    />
                </Grid>

                <Grid item xs={12}>
                    <Controls.Button
                    name="addDish"
                    text="Add"
                    type="submit"
                    />

                    
                            <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                </Grid>

                
             </Grid>
        </Form>
    )
}

export default RestaurantDishItem;