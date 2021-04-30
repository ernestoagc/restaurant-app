import React,{useEffect, useState} from 'react'

import { useSelector } from "react-redux"; 
import Controls from "../controls/Controls"

export const ErrorMessage = () => {   
    
 const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })  
 const { showMessage,message,typeMessage} = useSelector( state => state.ui ); 

useEffect(()=>{
    
    if(showMessage){
        setNotify({
            isOpen: showMessage,
            message: message,
            type: typeMessage
        })   

    }
    
},[showMessage]);



    return (
        <Controls.Notification
        notify={notify}
        setNotify={setNotify}
    />
    )
}
