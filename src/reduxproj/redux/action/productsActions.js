import { actionTypes } from "../contants/action_types"
export const setProducts=(products)=>
{
return{type:actionTypes.SET_PRODUCTS,payload:products}
}