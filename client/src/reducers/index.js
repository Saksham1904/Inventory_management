import {combineReducers} from "@reduxjs/toolkit"
import productReducer from "../slices/product"



const rootreducer=combineReducers({
    product:productReducer

})
export default rootreducer