/* eslint-disable no-unused-vars */
// @ts-nocheck
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";



const adapterizer = () => {
    return {
        selectById:(designer) => designer.id,
        sortComporer:(preDesigner,nextDesigner) => preDesigner.id.sortComparer(nextDesigner.id)
    }
}

const designersAdapter = createEntityAdapter(adapterizer());



const initialState = {
  status: "idle",
  error: null,
  selectedDesigner: {},
  desisgners: {
    ids: [],
    entities: {},
  },
};

const sliceInvoker = () => {
  return {
    name: "designers",
    initialState,
    reducers: {},
    extraReducers: {},
  };
};

const designersSlice = createSlice(sliceInvoker());

export default designersSlice.reducer;
