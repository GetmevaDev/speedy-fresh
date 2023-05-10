import { createSlice } from "@reduxjs/toolkit";

const prevPage = createSlice(
  {
    name: "getLocation",
    initialState: {
      name:"",
      prevName:""
    },
    reducers:{
      getCurrentUrlName: (state, action)=> {
        state.name = action.payload
      },
      getPrevUrlName:(state, action)=> {
        state.prevName = action.payload
      }
    }
  }
)

export const { getCurrentUrlName, getPrevUrlName } = prevPage.actions
export default prevPage.reducer;