/* eslint-disable no-unused-vars */
// @ts-nocheck
import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
  } from "@reduxjs/toolkit";
  
  const adapterizer = () => {
    return {
      selectById: (post) => post.id,
      sortComporer: (prePost, nextPost) =>
      prePost.id.localeCompare(nextPost.id),
    };
  };
  
  const postsAdapter = createEntityAdapter(adapterizer());
  
  const initialState = {
    status: "posts",
    error: null,
    notification: {},
    notifications: {
      ids: [],
      entities: {},
    },
  };
  
  const sliceInvoker = () => {
    return {
      name: "posts",
      initialState,
      reducers: {},
      extraReducers: {},
    };
  };
  
  const postsSlice = createSlice(sliceInvoker());
  
  export default postsSlice.reducer;
  