import axios from "axios";
import React ,{useEffect}from "react";
import { selectedProduct,removeSelectedProduct } from "../redux/action/ProductsAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product);

  const { productId } = useParams();

  const fetchProductDetail = async () => {
    const resp = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    dispatch(selectedProduct(resp.data));
  };
  useEffect(() => {
     if(productId && productId!=="")
     {
fetchProductDetail();
     }
     return ()=>
     {
       dispatch(removeSelectedProduct())
     }
  }, [productId])
  return (
    <div>
{
  Object.keys(data).length===0 ?(<div>loading....</div>):(

        
        <div class="card">
        <img src={data.image} alt="Avatar" />
        <div class="container">
          <h4><b>{data.title}</b></h4> 
          <p>{data.price}</p>
          <p>{data.description}</p>

        </div>
      </div>
  )   
}
    </div>
  );
};

export default ProductDetails;
