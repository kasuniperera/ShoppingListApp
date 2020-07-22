import { createSlice } from '@reduxjs/toolkit'
import InitialState from './InitialState'

const authSlice = createSlice({
  name:'auth',
  initialState: InitialState,
  reducers: {
    saveUser (state, action){
      state.auth.token = action.payload.token,
      state.auth.user = action.payload.user
    }
  }
});

export const {saveUser} = authSlice.actions;

export default authSlice.reducer;