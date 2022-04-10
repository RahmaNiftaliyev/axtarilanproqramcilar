/* eslint-disable no-unused-vars */
// @ts-nocheck
import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";


const adapterizer = () => {
    return {
        selectById: (email) => email.id,
        sortComporer: (preEmail, nextEmail) =>preEmail.id.localeCompare(nextEmail.id)
    }
}

const emailsAdapter = createEntityAdapter(adapterizer());

const initialState = {
    status: "idle",
    error: null,
    selectedEmail:{},
    emails: {
        ids: [],
        entities: {},
    }
}


const sliceInvoker = () => {
    return {
        name: "emails",
        initialState,
        reducers: {},
        extraReducers: {},
    }
}


const emailsSlice = createSlice(sliceInvoker());





export default emailsSlice.reducer;