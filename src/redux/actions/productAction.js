import { ActionTypes } from  '../constants/actionTypes';


export const setProduct = (products) => {
    return {
        type :  ActionTypes.SET_PRODUCT,
        payload : products,
    };
};

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload : product,
    };
};

// export const removeSelectedProduct = (products) => {
//     return {
//         type: actionTypes.REMOVE_SELECTED_PRODUCT,
//         payload : products,
//     };
// };
