import React from 'react'
import { useSelector } from 'react-redux';


export default function ProductComponent() {

     // In order to get access to our store to get state, we use useSelector
  const products = useSelector((state) => state.allProducts.products);
//   console.log("productsComponent",products );
  const {id , title} = products[0]; //its an array and we have only one record at the moment

//   we need to acces this title from redux/ 
  return (
    <div className='four column wide'>
        <div className='ui link cards'>
            <div className='card'>
                <div className='image'></div>
                <div className='content'>
                    <div className='header'>{id}</div>
                    <p>{title}</p>
                    </div>
                
                </div>
        </div>
    </div>
  )
}
