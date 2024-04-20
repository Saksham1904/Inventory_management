import { createSlice } from "@reduxjs/toolkit"


const initialstate={
    data:null,
    loading:false,
    category:null,
    token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")):null
}

const productSlice=createSlice({
    name:"product",
    initialState:initialstate,
    reducers:{
        setloading(state,value){
            state.loading=value.payload
        },
         setdata(state,value){
            state.data=value.payload
         },
         setcategory(state,value){
            state.category=value.payload
         },
         settoken(state,value){
            state.token=value.payload
         },
    }
})

export const {setloading,setdata,setcategory,settoken}=productSlice.actions;
export default productSlice.reducer