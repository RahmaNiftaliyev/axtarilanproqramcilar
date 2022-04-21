/* eslint-disable no-unused-vars */
// @ts-nocheck
import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";


const adapterizer = () => {
    return {
        selectId:(user) => user.id,
    sortComparer:(previousUser,nextUser) => previousUser.id.localeCompare(nextUser.id) 
    }
}

const usersAdapter = createEntityAdapter(adapterizer())


const initialState = {
    status:'idle',
    error:null,
    selectedUser:{},
    users:{
        ids:[],
        entities:{

        }
    }
}

const sliceInvoker = () => {
    return {
        name:'users',
        initialState,
        reducer:{},
        extraReducers:{}
    }
}

const usersSlice = createSlice(sliceInvoker())


export const {
    selectAll:selectAllUsers,
    selectById:selectUserById,
    selectIds:selectAllIds,
    selectTotal:selectAllUserTotal,
    selectEntities:selectAllUserEntities
    
} = usersAdapter.getSelectors(state => state.users.users)

export default usersSlice.reducer