import { ActionTypes } from "../contants/action-types";
const initialState=
{
    products:[]
}
const productReducers=(state=initialState,{type,payload})=>
{
switch(type)
{
case ActionTypes.SET_PRODUCTS:
    return {...state,products:payload};
case ActionTypes.SELECTED_PRODUCT:
    return state;
  default:
      return state;  
   
}
}
const selectedProductReducers=(state={},{type,payload})=>
{
switch(type)
{
case ActionTypes.SELECTED_PRODUCT:
    return{...state,...payload}

    case ActionTypes.REMOVE_SELECTED_PRODUCT:
        return{}
    
    default:
        return state;
}
}
export {productReducers,selectedProductReducers};