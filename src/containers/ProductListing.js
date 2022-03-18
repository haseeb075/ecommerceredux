import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProductComponent from "./ProductComponent";
import { setProducts} from '../redux/actions/productActions'

export default function ProductListing() {
  // In order to get access to our store to get state, we use useSelector or Allows you to extract data from the Redux store state, using a selector function.
  const products = useSelector((state) => state);
  // console.log("Store products",products);
  // Once we get the data from server we have to dispatch our action i.e. setProducts
  const dispatch = useDispatch() 

// getting all products from api- start
  const fetchProducts = async () => { 
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log("Error", err));
    // console.log("getapi response", response.data); 
    //Once we get data from server we need to add data into our store, For that we have to dispatch an action i.e. setProducts by using useDispatch() hook
    dispatch(setProducts(response.data)); // it will go to all actions and return setProduct object & this object will be taken by reducer.
  };
  
  // getting all products from api- end
  useEffect(()=> {
    fetchProducts()
  })

  // Consoling log all the products which we have the set in our redux
  console.log("Products from ReduxStore", products); // Once we get the data from our products we are dispatching our action(SET_PRODUCTS)
  // Once we set the products we are actually changing the state


  return (
    <div className="ui grid container">
      <h5>All Products</h5>
      
      <ProductComponent />
    </div>
  );
}
