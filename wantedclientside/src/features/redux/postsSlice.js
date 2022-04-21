/* eslint-disable no-unused-vars */
// @ts-nocheck
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';

const adapterizer = () => {
  return {
    selectById: (post) => post.id,
    sortComporer: (prePost, nextPost) => prePost.id.localeCompare(nextPost.id),
  };
};

const postsAdapter = createEntityAdapter(adapterizer());

const initialState = {
  status: 'idle',
  error: null,
  notification: {},
  notifications: {
    ids: [],
    entities: {},
  },
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  let url = '/api';
  try {
    let request = await fetch(url);
    return await request.json();
  } catch (err) {
    throw new Error(err);
  }
});

const sliceInvoker = () => {
  return {
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
      [fetchPosts.pending]: (state, action) => {
        state.status = 'loading';
      },
      [fetchPosts.fulfilled]: (state, action) => {
        (state.status = 'succeeded');
          postsAdapter.setAll(state, action.paylaod);
      },
      [fetchPosts.rejected]: (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      },
    },
  };
};

const postsSlice = createSlice(sliceInvoker());

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectAllPostIds,
  selectTotal: selectTotalPosts,
  selectEntities: selectPostEntities,
} = postsAdapter.getSelectors((state) => state.posts.posts);

export default postsSlice.reducer;
