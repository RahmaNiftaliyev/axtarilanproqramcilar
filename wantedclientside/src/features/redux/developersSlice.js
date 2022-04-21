/* eslint-disable no-unused-vars */
// @ts-nocheck
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";

const adapterizer = () => {
  return {
    selectId: (developer) => developer.id,
    sortComparer: (preDeveloper, nextDeveloper) =>
      preDeveloper.id.sortComparer(nextDeveloper.id),
  };
};

const developersAdapter = createEntityAdapter(adapterizer());

const initialState = {
  status: "idle",
  error: null,
  selectedDeveloper: {},
  developers: {
    ids: [],
    entities: {},
  },
};

const sliceInvoker = () => {
  return {
    name: "developers",
    initialState,
    reducers: {},
    extraReducers: {},
  };
};

const developersSlice = createSlice(sliceInvoker());

export const {
  selectAll: selectAllDevelopers,
  selectById: selectDeveloperById,
  selectEntities: selectAllDevelopersEntities,
  selectTotal: selectDevelopersSliceTotal,
  selectIds: selectAllDevelopersIds,
} = developersAdapter.getSelectors((state) => state.developers.developers);

export default developersSlice.reducer;
