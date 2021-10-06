import cartReducer from "./cartReducer";
import {combineReducers} from "@reduxjs/toolkit";

let reducers = combineReducers({
    cartReducer: cartReducer,
});

const rootReducer = (state, action) => {
    return reducers(state, action);
};

export default rootReducer;
