// In real world application, we have multiple reducers and we have to incorporate them in index.js file

import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer,  
    product: selectedProductReducer,
})

export default reducers;