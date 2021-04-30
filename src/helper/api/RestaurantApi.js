import { SignalCellularNoSimOutlined } from '@material-ui/icons';
import axios from 'axios'
import {axiosInstance} from '../../helper/axiosInstance'
const urlApi="https://api-restaurant.azurewebsites.net/api/";
const pathFindAll ="RestaurantFindAll?code=tocSUkQa7bvUVIMM8hd5tGi/sOacR61fE/4IiI1/PIvhXaiTLqkjtA==";
const pathCreate ="RestaurantInsert?code=agReO4TTfMtIK8dwUfkHfmXyVmTy44ScfZXudoDx6Os5Rt681J8KNQ==";
const pathGetDetail ="RestaurantGetDetail/";

const pathUpdate ="RestaurantUpdate/";
const pathFileUplodad ="RestaurantFileUpload/?code=YQG6fuph5LwleZuX9duxCoUa08NvGiPk2JIKkILzEonbhjqRYfyAHA=="


//const {axiosInstance} = AxioUtil;

export const apiGetRestaurants = async () =>{

let restaurants = [];

   await axios.get(urlApi+pathFindAll).then(response=>{
      //  console.log("response: " + response);
      restaurants=  response.data;
    }).catch(error=>{
        console.error(error);
         throw error;
    });

    return restaurants;
 
}


export const apiGetRestaurantDetail = async (id) =>{


  
    let restaurant = {}; 


    let urlServicio = urlApi+pathGetDetail +id;

    console.log("urlServicio: " + urlServicio);

       await axiosInstance.get(urlServicio).then(response=>{
          //  console.log("response: " + response);
          restaurant=  response.data;
        }).catch(error=>{
            console.error(error);
             throw error;
        });
    
        return restaurant;
     
    }
    


export const apiCreateRestaurant = async (restaurant) =>{

    let restaurantResponse = {};
    
       await axiosInstance.post(urlApi+pathCreate,restaurant).then((response)=>{
          restaurantResponse=  response.data;
        }).catch(error=>{
            console.error(error);
             throw error;
        });
    
        return restaurantResponse;
     
    }

    export const apiUpdateRestaurant = async (restaurant) =>{

        let restaurantResponse = {};
        
           await axiosInstance.put(urlApi+pathUpdate+restaurant.id,restaurant).then((response)=>{
              restaurantResponse=  response.data;
            }).catch(error=>{
                console.error(error);
                 throw error;
            });
        
            return restaurantResponse;
         
        }
    
        export const apiUploadFileRestaurant = async (formData) =>{
            let urlFile = "";    
            await axiosInstance.post(urlApi+pathFileUplodad,formData).then((response)=>{
              
                urlFile=  response.data[0];
             }).catch(error=>{
                 console.error(error);
                  throw error;
             });
         
             return urlFile;

        }