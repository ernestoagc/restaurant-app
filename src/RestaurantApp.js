import React,{useState} from 'react'
import { AppRouter } from './routers/AppRouter'
import   './css/style.css'
import {Provider} from 'react-redux'
import {store} from './store/store'
import {Loading} from './components/shared/Loading'
import {ErrorMessage} from './components/shared/ErrorMessage'
    


export const RestaurantApp = () => {
    return (
        <Provider store={store}>
                <AppRouter />
                <Loading />          
                <ErrorMessage />      
        </Provider>
    )
}
