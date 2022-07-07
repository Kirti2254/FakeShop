import { combineReducers } from "@reduxjs/toolkit";
import { productReducer, selectedProductReducer } from "./productReducers";

 const reducers = combineReducers({
       allProducts : productReducer,
       product : selectedProductReducer,
 });

 export default reducers;
