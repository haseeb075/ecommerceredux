import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct,removeSelectedProduct } from "../redux/actions/productActions";

export default function ProductDetail() {
  const { productId } = useParams(); // To use useParams hook in order to get the param value
  console.log("ProductId", productId); //By using this id we are gonna make call of fetchapi for single product
  const dispatch = useDispatch(); //useDispatch hook in redux used for dispatching the action
  // make access of the selected product we use useSelector hook
  // Allows you to extract data from the Redux store state, using a selector function.
  // We also have reducer for that
  const product = useSelector((state) => state.product); //key would be same as it is inserted into index.js
  const {image, title, price, category, description} = product;
  console.log("product", product);

  // // getting single product
  const fetchSingleProduct = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log("Error", err));
    console.log("singleProduct API response", response.data);

    dispatch(selectedProduct(response.data)); // Once we get the data we need to dispatch an action which is selected product(action) and pass the response.data coming from api
  };

  // getting single product from api
  useEffect(() => {
    if (productId && productId !== "") fetchSingleProduct();

    return ()=> {
      dispatch(removeSelectedProduct())  
    }

  }, [productId]); //useEffect will run everytime when productId changes
 
 
 
  return (
    <div className="ui grid container">

      {Object.keys(product).length === 0 ? <div>...Loading</div> : 
      
      <div className="ui placeholder segment">
        <div className="ui two column stackable center aligned grid">
          <div className="ui vertical divider">AND</div>
          <div className="middle aligned row">
            <div className="column lp">
              <img className="ui fluid image" src={image} />
            </div>
            <div className="column rp">
              <h1>{title}</h1>
              <h2>
                <a className="ui teal tag label">${price}</a>
              </h2>
              <h3 className="ui brown block header">{category}</h3>
              <p>{description}</p>
              <div className="ui vertical animated button" tabIndex="0">
                <div className="hidden content">
                  <i className="shop icon"></i>
                </div>
                <div className="visible content">Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      }
    </div>
  );
}
