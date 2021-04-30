import React, {useState} from 'react'

const useFormData = (initialState=[]) => {

    const [formDataValues,setFormDataValues] =  useState(initialState);

    const addFormDataValue= (formData,id) =>{
        formData.append("id",id);
        setFormDataValues([...formDataValues,formData]);
    }

    const deleteFormDataValue = (id) =>{
        setFormDataValues(formDataValues.filter( forDish =>forDish.get("id")!==id));
    }


    const getFormDataValue = (id) =>{

        let arrayResult = formDataValues.filter( forDish =>forDish.get("id")===id);
        if(arrayResult.length==0)
        return null;


       return arrayResult[0];
    }

    const getFile = (id) =>{
        //return formDataValues.filter( forDish =>forDish.get("id")===id).get("imageFile");
        let formData = getFormDataValue(id);

        if(formData==null)
        return null;
        
        return formData.get("imageFile");
    }

    const getImagePreviewTemp = (id) =>{

        if(id==null){
            return null;
        }

        let fileObject = getFile(id);

        if(fileObject==null){
            return null;
        }
        

        return  URL.createObjectURL(fileObject);
    }

    return  {formDataValues,setFormDataValues,addFormDataValue,deleteFormDataValue ,getFormDataValue,getImagePreviewTemp} 
}

export default useFormData
