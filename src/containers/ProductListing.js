import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProductComponent from "./ProductComponent";
import { setProducts} from '../redux/actions/productActions'

export default function ProductListing() {
  // In order to get access to our store to get state, we use useSelector
  const products = useSelector((state) => state);
  // console.log("Store products",products);
  const dispatch = useDispatch() 

// getting all products from api- start
  const fetchProducts = async () => { 
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log("Error", err));
    console.log("getapi response", response.data); 
    //Once we get data from server we need to add data into our store, For that we have to dispatch an action i.e. setProducts by using useDispatch() hook
    dispatch(setProducts(response.data));
  };
  
  // getting all products from api- end
  useEffect(()=> {
    fetchProducts()
  })



  return (
    <div className="ui grid container">
      <h1>Product Listing</h1>
      <ProductComponent />
    </div>
  );
}
