import{types} from '../types/types'

const initialState = {
    loading:false,
    authenticated:true,
    message:"",
    showMessage:false,
    typeMessage:""
}

export const uiReducer = (state = initialState,action) =>{

switch (action.type) {
        case types.UI_LOADING_REQUEST:
            return {
                ...state,
                loading:true,                          
                showMessage:false,
                message:"",
                typeMessage:""
            }
        case types.UI_LOADING_SUCCESS:
            return {
                ...state,
                loading:false,                
                error:false,
                message:""
            }
         case types.UI_SHOW_SUCCESS_MESSAGGE:
                return {
                    ...state,
                    loading:false,                
                    showMessage:true,
                    message:action.payload.message,
                    typeMessage:"success"
                }
            case types.UI_SHOW_ERROR_MESSAGGE:
                return {
                    ...state,
                    loading:false,                
                    showMessage:true,
                    message:action.payload.message,
                    typeMessage:"error"
                }
        default:
            return { ...state}
    }
}