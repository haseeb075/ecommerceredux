// create reducer : it always takes the initial state and the action
import { ActionTypes} from '../constants/action-types' 

const initialState = {
    products: [{
        id: 1,
        title: "gloves",
        category: "clothes"
    }]
}

// export const productReducer = (state, action) => {  // destructuring actions

export const productReducer = (state = initialState, {type, payload}) => {

    switch(type){
        case ActionTypes.SET_PRODUCTS: 
        return state;
        
        default:
        return state;
    }

}