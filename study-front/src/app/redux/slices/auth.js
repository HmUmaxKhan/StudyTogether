const { createSlice,nanoid } = require("@reduxjs/toolkit");


const initialState = {
    id:null,
    userDetails:null
}

const AuthSlice = createSlice({
    name:"AuthSlice",
    initialState,
    reducers:{
       authJWT : (state,action)=>{
          let data={
             id:nanoid(),
             userDetails:action.payload,
          }
         
          state.userDetails=data
       }
    }

})


// Exporting actions
export const { authJWT } = AuthSlice.actions;

// Exporting the reducer
export default AuthSlice.reducer;
