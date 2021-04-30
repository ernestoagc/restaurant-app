import { applyMiddleware, combineReducers, createStore,compose } from "redux";
import thunk from 'redux-thunk';
import { restaurantReducer } from "../reducers/restaurantReducer";
import { uiReducer } from "../reducers/uiReducer";


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    restaurant: restaurantReducer,
    ui:uiReducer

})


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);