/* eslint-disable no-unused-vars */
// @ts-nocheck
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";

const adapterizer = () => {
  return {
    selectById: (notification) => notification.id,
    sortComporer: (previousNotification, nextNotification) =>
      previousNotification.id.localeCompare(nextNotification.id),
  };
};

const notificationsAdapter = createEntityAdapter(adapterizer());

const initialState = {
  status: "idle",
  error: null,
  notification: {},
  notifications: {
    ids: [],
    entities: {},
  },
};

const sliceInvoker = () => {
  return {
    name: "notifications",
    initialState,
    reducers: {},
    extraReducers: {},
  };
};

const notificationsSlice = createSlice(sliceInvoker());

export default notificationsSlice.reducer;
