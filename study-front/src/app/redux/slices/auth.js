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
         console.log(action);
          let data={
             id:nanoid(),
             userDetails:action.payload,
          }
          console.log(data);
          state.userDetails=data
       }
    }

})


// Exporting actions
export const { authJWT } = AuthSlice.actions;

// Exporting the reducer
export default AuthSlice.reducer;
