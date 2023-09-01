// import { legacy_createStore as createStore } from 'redux'
// import { FETCH_CATEGORY, FETCH_PRODUCT } from './actions/actionType';
// let initialState = {
//     counter: 0,
//     categories: [],
//     products: [],
//     product: "",
//     category: ""
// }
// function counterReducer(state = initialState, action) {
//     console.log(action);
//     console.log(state);
//     switch (action.type) {
//         case FETCH_CATEGORY:
//             return {
//                 ...state,
//                 categories: action.payload
//             }
//         case "fetchProduct":
//             return {
//                 ...state,
//                 products: action.payload
//             }
//         case 'fetchProductById':
//             return {
//                 ...state,
//                 product: action.payload
//             }
//         case 'fetchCategoryById':
//             return {
//                 ...state,
//                 category: action.payload
//             }
//         case 'DELETE_CATEGORY':
//             return {
//                 ...state,
//                 categories: state.categories.filter((category) => category.id !== action.payload),
//             };

//         default:
//             return state
//     }
// }

// // Create a Redux store holding the state of your app.
// // Its API is { subscribe, dispatch, getState }.
// let store = createStore(counterReducer)

// export default store

import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "./middlewares/logger";
import rootReducer from "./reducers/rootReducer";

let store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;