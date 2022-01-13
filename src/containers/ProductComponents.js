import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";
const ProductComponents = () => {
  const state = useSelector((state) => state.allProducts.products);

  return (
    <>
{
    state.map((data)=>
    (
        <Link to={`/product/${data.id}`}>
        <div class="card">
        <img src={data.image} alt="Avatar" />
        <div class="container">
          <h4><b>{data.title}</b></h4> 
          <p>{data.price}</p>
          <p>{data.description}</p>

        </div>
      </div>
      </Link>
    ))
}
 
    </>
  );
};

export default ProductComponents;
