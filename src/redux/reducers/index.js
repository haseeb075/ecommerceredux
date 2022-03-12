// In real world application, we have multiple reducers and we have to incorporate them in index.js file

import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer,    
})

export default reducers;