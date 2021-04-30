import{types} from '../types/types' 

export const uiLoadingRequest = () =>({
    type: types.UI_LOADING_REQUEST
})

export const uiLoadingSuccess= () =>({
    type: types.UI_LOADING_SUCCESS
})


export const uiShowMessage= (message,typeMessage)=>{
    return (dispatch)=>{        
        
        switch (typeMessage) {
            case "success":
                dispatch(uiShowSuccessMessage(message));
                break;
            case "error":
                dispatch(uiShowErrorMessage(message));
                break;        
            default:
                break;
        }
    }

}

const uiShowSuccessMessage= (message) =>({
    type: types.UI_SHOW_SUCCESS_MESSAGGE,
    payload:{
        message
    }
})

const uiShowErrorMessage= (message) =>({
    type: types.UI_SHOW_ERROR_MESSAGGE,
    payload:{
        message
    }
})