import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const adapterizer = () => {
  return {
    selectId: (order) => order.id,
    sortComparer: (prevOrder, nextOrder) => prevOrder.id.localeCompare(nextOrder.id),
  };
};

const ordersAdapter = createEntityAdapter(adapterizer());

const initialState = {
  status: 'idle',
  error: null,
  activeOrder: {},
  orders: {},
};

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
  let url = 'http://localhost:3000/orders';
  try {
    let request = await fetch(url);
    return await request.json();
  } catch (err) {
    return new Error(err);
  }
});


const sliceInvoker = () => {
  return {
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: {
      [fetchOrders.pending]: (state, action) => {
        state.status = 'loading';
      },
      [fetchOrders.fulfilled]: (state, action) => {
        state.status = 'suceedded';
        state.orders.addMany(action.payload);
      },
      [fetchOrders.rejected]: (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      },
    },
  };
};


const ordersSlice = createSlice(sliceInvoker());


export const {
  selectEntities: selectAllOrders,
  selectIds: selectAllOrderIds,
  selectById: selectOrderById,

} = ordersAdapter.getSelectors(state => state.orders.orders);

export default ordersSlice.reducer;
