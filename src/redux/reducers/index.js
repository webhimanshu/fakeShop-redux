import { combineReducers } from "redux";
import { productReducers ,selectedProductReducers} from "./ProductsReducers";
export const reducers=combineReducers({
    allProducts:productReducers,
   product:selectedProductReducers,
})
