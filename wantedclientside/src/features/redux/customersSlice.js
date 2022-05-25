/* eslint-disable no-unused-vars */
// @ts-nocheck
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';

const adapterizer = () => {
  return {
    selectId: (customer) => customer.id,
    sortComparer: (preCustomer, nextCustomer) =>
      preCustomer.id.sortComparer(nextCustomer.id),
  };
};

const customersAdapter = createEntityAdapter(adapterizer());

const initialState = {
  status: 'idle',
  error: null,
  selectedCustomer: {},
  customers: {
    ids: [],
    entities: {},
  },
};

const sliceInvoker = () => {
  return {
    name: 'customers',
    initialState,
    reducers: {
      
    },
    extraReducers: {},
  };
};

const customersSlice = createSlice(sliceInvoker());

export const {
  selectAll: selectAllcustomers,
  selectById: selectCustomersById,
  selectEntities: selectAllCustomersEntities,
  selectTotal: selectCustomersSliceTotal,
  selectIds: selectAllCustomersIds,
} = customersAdapter.getSelectors((state) => state.customers.customers);

export default customersSlice.reducer;
