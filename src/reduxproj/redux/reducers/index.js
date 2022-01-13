import { combineReducers } from "redux";
import { setProducts } from "../action/productsActions";
export const reducers=(combineReducers({allProducts:setProducts}));