import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { setProducts } from "../redux/action/ProductsAction";
import { useDispatch } from "react-redux";
import './style.css'
import axios from "axios";
import ProductComponents from "./ProductComponents";
const ProductList = () => {
  const state = useSelector((state) => state);
  const dispatch=useDispatch();
  console.log(state);
  const fetchProducts = async () => {
    const resp = await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => res)
      .catch((err) => console.log(err));
       dispatch(setProducts(resp.data))
 
};
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(state)
  return (
    <div className="card-container">
      <ProductComponents />
    </div>
  );
};

export default ProductList;
