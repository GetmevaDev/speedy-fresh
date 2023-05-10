import { configureStore } from "@reduxjs/toolkit";
import prevPage from "./prevPage";


const store = configureStore({ 
  reducer:{
    getLocation: prevPage
  }
 })

export default store