import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ProductComponent() {
  // In order to get access all products of our store to get state, we use useSelector
  const products = useSelector((state) => state.allProducts.products); //This product is array of products and we goona do map

  //   console.log("productsComponent",products );
  // const {id , title} = products[0]; //its an array and we have only one record at the moment

  //   we need to acces this title from redux which is map

  return (
    <>
      {products.map((product) => (
        <div className="four wide column" key={product.id}>
          <Link to={`/product/${product.id}`}>
            <div className="ui link cards">
              <div className="card">
                <div className="image">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="content">
                  <div className="header">{product.title}</div>
                  <div className="meta price">${product.price}</div>
                  <div className="meta">{product.category}</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}
