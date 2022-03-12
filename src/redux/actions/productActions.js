// contain all actions

import { ActionTypes } from "../constants/action-types"
export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS, 
        payload: products,
    }
}
export const selectedProducts = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT, 
        payload: product,
    }
}
// export const removeselectedProduct = (removeproduct) => {
//     return {
//         type: ActionTypes.REMOVESELECTED_PRODUCT,
//         payload: removeproduct,
//     }
// }