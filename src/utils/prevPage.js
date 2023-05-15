import { createSlice } from "@reduxjs/toolkit";

const prevPage = createSlice(
  {
    name: "getLocation",
    initialState: {
      name:"Home"
      
    },
    reducers:{
      getCurrentUrlName: (state, action)=> {
        state.name = action.payload
      }
    }
  }
)

export const { getCurrentUrlName } = prevPage.actions
export default prevPage.reducer;