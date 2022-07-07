import { configureStore } from "@reduxjs/toolkit"; 
import reducers from '../redux/reducers/index';
import { composeWithDevTools } from "redux-devtools-extension";


const store = configureStore({
    reducer : reducers,
    devTools: composeWithDevTools,
});

export default store;

