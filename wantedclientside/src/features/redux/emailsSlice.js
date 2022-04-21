/* eslint-disable no-unused-vars */
// @ts-nocheck
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';

const adapterizer = () => {
  return {
    selectById: (email) => email.id,
    sortComporer: (preEmail, nextEmail) =>
      preEmail.id.localeCompare(nextEmail.id),
  };
};

const emailsAdapter = createEntityAdapter(adapterizer());

const initialState = {
  status: 'idle',
  error: null,
  selectedEmail: {},
  emails: {
    ids: [],
    entities: {},
  },
};

export const fetchEmails = createAsyncThunk('emails/fetchEmails', async () => {
  let url = '/api/getall';
  try {
    let request = await fetch(url);
    return await request.json();
  } catch (err) {
    throw new Error(err);
  }
});

const sliceInvoker = () => {
  return {
    name: 'emails',
    initialState,
    reducers: {},
    extraReducers: {
      [fetchEmails.pending]: (state, action) => {
        state.status = 'loading';
      },
      [fetchEmails.fulfilled]: (state, action) => {
        state.state = 'succeeded';
        emailsAdapter.setAll(action.payload, state.emails);
      },
      [fetchEmails.rejected]: (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      },
    },
  };
};

const emailsSlice = createSlice(sliceInvoker());

export default emailsSlice.reducer;
