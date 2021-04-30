import{types} from '../types/types' 
import {apiGetRestaurants, apiCreateRestaurant, apiGetRestaurantDetail,apiUpdateRestaurant,apiUploadFileRestaurant} from '../helper/api/RestaurantApi'
import {uiLoadingRequest,uiLoadingSuccess,uiShowMessage} from  './uiAction'

const urlApi="https://api-restaurant.azurewebsites.net/api/";
const pathFindAll ="RestaurantFindAll?code=tocSUkQa7bvUVIMM8hd5tGi/sOacR61fE/4IiI1/PIvhXaiTLqkjtA==";



//---------------------
export const fetchRestaurantsSuccess = (restaurants) =>({
    type: types.FETCH_RESTAURANTS_SUCCESS,
    payload: {
        restaurants
    }
})

export const fetchRestaurantsRequest = () =>({
    type: types.FETCH_RESTAURANTS_REQUEST
})

export const fetchRestaurantsError= () =>({
    type: types.FETCH_RESTAURANTS_ERROR
})






export const getRestaurants = () =>{
return async (dispatch) =>{

    dispatch(uiLoadingRequest());
    dispatch(fetchRestaurantsRequest());

    
    let restaurants = await apiGetRestaurants();
    try{
        dispatch(fetchRestaurantsSuccess(restaurants));
    }catch(error){
        dispatch(fetchRestaurantsError());
    }

    dispatch(uiLoadingSuccess());
   

    }
}



export const dishAdd= (dish) =>({
    type: types.DISH_ADD,
    payload:{
        dish:dish
    }
})

export const dishDelete= (id) =>({
    type: types.DISH_DELETE,
    payload:{
        id
    },
})

export const restaurantNew= () =>({
    type: types.RESTAURANT_NEW
})


export const restaurantSave= (restaurant,changePicture,formData,dishes,formDataDishes,getFormDataValue) =>{
    return async( dispatch, getState ) => {

        console.log("====>GUARDA  1");
       
        if(changePicture){
            let urlImage = await apiUploadFileRestaurant(formData);
            restaurant.urlImage=urlImage;
        }
        
        
        for (const dish of dishes) {
            console.log(dish);
            if(!dish.urlImage){

            let subida = getFormDataValue(dish.id);;
            subida.delete("id"); 
            let urlImageDish = await apiUploadFileRestaurant(subida);
            dish.urlImage=urlImageDish;

            }
          }

          restaurant.dishes=dishes; 
        restaurant.dishes=dishes;
 
        let newRestaurant = {};
        if(restaurant.id==null){
            newRestaurant= await apiCreateRestaurant(restaurant);
        }else{
            newRestaurant= await apiUpdateRestaurant(restaurant);
            console.log(newRestaurant);
        }      

        dispatch(restaurantSaveSuccess(newRestaurant,newRestaurant.dishes));

    }
}


export const restuarntGetDetail = (id) =>{
    return async(dispatch) =>{
        dispatch(restaurantLoadRequest());
        let restaurant= await apiGetRestaurantDetail(id);
        dispatch(restaurantLoadSuccess(restaurant,restaurant.dishes));
    }
}

export const restaurantUploadFile = (formData) =>{
    return async (dispatch) =>{

        dispatch(restaurantSaveRequest());
        let urlImage = await apiUploadFileRestaurant(formData);
        dispatch(restaurantFileSuccess(urlImage));
    }

}

const restaurantSaveRequest= () =>({
    type: types.RESTAURANT_SAVE_REQUEST
})

const restaurantSaveSuccess= (restaurantDetail,dishes) =>({
    type: types.RESTAURANT_SAVE_SUCCESS,
    payload:{
        restaurantDetail,
        dishes
    }
})

const restaurantLoadRequest= () =>({
    type: types.RESTAURANT_LOAD_REQUEST
})


const restaurantFileRequest= () =>({
    type: types.RESTAURANT_UPLOAD_FILE_REQUEST
});

const restaurantFileSuccess= (urlImage) =>({
    type: types.RESTAURANT_UPLOAD_FILE_SUCCESS,
    payload:{
        urlImage
    }
})

const restaurantLoadSuccess= (restaurant,dishes) =>({
    type: types.RESTAURANT_LOAD_SUCCESS,
    payload:{
        restaurant,
        dishes
    }
})

const restaurantLoadError= () =>({
    type: types.RESTAURANT_LOAD_ERROR,
})
