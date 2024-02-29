import {  createSlice } from "@reduxjs/toolkit";


import { fetchUserByName } from '../action/Action.tsx';


export interface InitialStateProps {
    name: string;
    age: number;
  }
  
  export interface UpdateAgeAction {
    type: 'UPDATE_AGE';
    payload: number;
  }
  export interface UpdateNameAction {
    type: 'UPDATE_Name';
    payload: string;
  }
  const initialState: InitialStateProps = {
    name: 'sneha',
    age: 22,
  };


  const userReducer= createSlice({
    name : "person",
    initialState,
    reducers :{
      changeName (state,action){
        state.name=action.payload

      },
      changeAge(state,action){
        state.age=action.payload
      },
      
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchUserByName.fulfilled, (state, action) => {
          state.name = action.payload;
        })
    .addCase(fetchUserByName.pending, (state) => {
      state.name = "Loading";
    }).addCase(fetchUserByName.rejected, (state) => {
      state.name = "Try Again";
    })
  },
  })

export const {changeName,changeAge}= userReducer.actions
  export default userReducer.reducer;