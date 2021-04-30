import axios from "axios";

import {uiLoadingRequest,uiLoadingSuccess,uiShowMessage} from '../actions/uiAction'
import {store} from '../store/store'
  //const baseURL = process.env.REACT_APP_BACKEND_URL;

  
  const {dispatch} = store;
  let headers = {};
  
/*
  if (localStorage.token) {
    headers.Authorization = `Bearer ${localStorage.token}`;
  }
*/
  export const axiosInstance = axios.create({
    headers,
  });

  axiosInstance.interceptors.request.use( request =>{
    //const dispatch = useDispatch();
   console.log("REQUEST INTERCEPTOR");
   dispatch(uiLoadingRequest());
  //  dispatch(uiLoadingRequest());
      return request;
}, function (error) {
  return Promise.reject(error);
})



axiosInstance.interceptors.response.use( (response) =>{

    console.log("RESPONSE INTERCEPTOR");
   // const dispatch = useDispatch();
    dispatch(uiLoadingSuccess());
      return response;
    
}, function (error) {  
    if (!error.response) {
      return new Promise((resolve, reject) => {

        dispatch(uiShowMessage("error servicio","error"));
        reject(error);
      });
    }


  })


  /*
  axiosInstance.interceptors.response.use(
    (response) =>
      new Promise((resolve, reject) => {
        resolve(response);
      }),
    (error) => {
      if (!error.response) {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }

      if (error.response.status === 403) {
        localStorage.removeItem("token");

        if (history) {
          history.push("/auth/login");
        } else {
          window.location = "/auth/login";
        }
      } else {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
    }
  );
*/