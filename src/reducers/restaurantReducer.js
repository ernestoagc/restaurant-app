import{types} from '../types/types'

const initialState = {
    restaurants: [],
    urlImage:"",
    changeImage:false,
    restaurantDetail:{
        id:null,
        code:"",
        name:"",
        email:"",
        urlImage:null,
        address:""},
    dishes:[],
    loading:false,
    active: null
}

export const restaurantReducer =(state=initialState,action) =>{

    switch (action.type) {
        case types.newRestaurant:
            return {
                name:action.payload.name,
                address: action.payload.address
            }
        case types.listRestaurant:
            return {
                ...state,
                restaurants: action.payload.restaurants
            }
        case types.FETCH_RESTAURANTS_REQUEST:
            return {
                ...state,
                restaurantDetail:initialState.restaurantDetail,
                restaurants: [],
                loading:true
            }
        case types.FETCH_RESTAURANTS_ERROR:
            return {
                ...state,
                restaurants: [],
                loading:false
            }
        case types.FETCH_RESTAURANTS_SUCCESS:
            return {
                ...state,
                restaurants: action.payload.restaurants,
                loading: false
            }
        case types.DISH_ADD:
            return {
                ...state,
                dishes:  [...state.dishes,action.payload.dish],
                loading: false
            }
         case types.DISH_DELETE:
            return {
                ...state,
                dishes: state.dishes.filter( dish =>dish.id!==action.payload.id ),
                loading: false
            }
        case types.RESTAURANT_NEW:
            return {
                ...state,
                dishes:[],
                restaurantDetail:initialState.restaurantDetail
            }
        case types.RESTAURANT_SAVE_REQUEST:
            return {
                ...state,
                loading:true
            }
        case types.RESTAURANT_SAVE_SUCCESS:
            return {
                ...state,
                dishes:action.payload.dishes,
                loading:false,
                restaurantDetail:action.payload.restaurantDetail
            }
        case types.RESTAURANT_SAVE_ERROR:
        return {
            ...state,
            loading:false
        }                
        case types.RESTAURANT_LOAD_REQUEST:
        return {
            ...state,
            dishes:[],
            loading:true
        }
        case types.RESTAURANT_LOAD_SUCCESS:
        return {
            ...state,
            restaurantDetail: action.payload.restaurant,
            dishes:action.payload.dishes,
            loading:false
        }
        case types.RESTAURANT_LOAD_ERROR:
        return {
            ...state,
            restaurantDetail: {},
            dishes:[],
            loading:false
        }
        case types.RESTAURANT_UPLOAD_FILE_REQUEST:
            return {
                ...state,
                urlImage:""
            }
        case types.RESTAURANT_UPLOAD_FILE_SUCCESS:
        return {
            ...state,
            urlImage:action.payload.urlImage,
        }
        default:
            return { ...state}
    }

}