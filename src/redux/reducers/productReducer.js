// create reducer : it always takes the initial state and the action
import { selectedProduct } from "../actions/productActions";
import { ActionTypes } from "../constants/action-types";

const initialState = {
  // Set the initially state for the redux to setup

  // products: [{
  //     id: 1,
  //     title: "gloves",
  //     category: "clothes"
  // }]

  // We have to update the state with a paylodd that we have received from the api(server)

  products: [],
};

// PROJECT DESCRIPTION
// export const productReducer = (state, action) => {  // destructuring actions
// dispatch(setProducts(response.data)); // it will go to all actions and return setProduct object & this object will be taken by reducer.
// When an object of ACTION is taken by reducer, it will get the type and payload & type would be SET_PRODUCTS  and once we get the
// SET_PRODUCTS as a type we need to pass the new state, we have to initially remove the record from here

// products: [{
//     id: 1,
//     title: "gloves",
//     category: "clothes"
// }]

// and have to update the state with the payload that we have received from the api(server)

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      // and have to update the state with the payload that we have received from the api(server)
      return { ...state, products: payload };

    default:
      return state;
  }
};

// Get the reducer for selectedProduct, takes 2 things state and action having type and payload
// We need to add this to our combined reducer
export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload }; // we are going to return whatever the state we have & then we are going to destructure the payload

    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {}; // for removing the product we just need to return an empty object
       
    default:
      return state;
  }
};
