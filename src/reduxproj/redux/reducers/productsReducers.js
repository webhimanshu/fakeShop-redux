import { setProducts } from "../action/productsActions";
import { actionTypes } from "../contants/action_types";
const initialState=
{
    products:
    [
        {
            id:5,
            title:"HImanshu",
            desc:"Himanshu Kuamr Sharma"
        }
    ]
}
export const setReducer=(state,{type,payload})=>
{
switch(type)
{
case actionTypes.setProducts:
    return state;

    default:
        return state;
}
}