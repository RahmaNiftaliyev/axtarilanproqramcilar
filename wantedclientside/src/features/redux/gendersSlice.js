/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";




const initialState = {
  status: "idle",
  error: null,
  selectedGender: {},
  genders: [
     { id: "1", gender: "male" },
     { id: "2", gender: "female" },
     { id: "3", gender: "custom" },
  ]
};

const sliceInvoker = () => {
  return {
    name: "gendersSlice",
    initialState,
    reducers: {},
    extraReducers: {},
  };
};

const gendersSlice = createSlice(sliceInvoker());

export const selectAllGenders = (state) => state.genders.genders

export default gendersSlice.reducer;
