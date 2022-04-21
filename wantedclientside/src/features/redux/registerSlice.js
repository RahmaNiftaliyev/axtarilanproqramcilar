/* eslint-disable no-undef */
import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const adapterizer = () => {
  return {
    selectIds: (month) => month.id,
    sortComparer: (previousMonth, nextMonth) =>
      previousMonth.id.localeCompare(nextMonth.id),
  };
};

const registerAdapter = createEntityAdapter(adapterizer());

const initialState = {
  status: "idle",
  error: null,
  birthday: {},
  fullYear: {
    ids: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    entities: {
      1: { id: "1", name: "Jan", maxDate: 31 },
      2: { id: "2", name: "Feb", maxDate: 28 },
      3: { id: "3", name: "Mar", maxDate: 31 },
      4: { id: "4", name: "Apr", maxDate: 30 },
      5: { id: "5", name: "May", maxDate: 31 },
      6: { id: "6", name: "Jun", maxDate: 30 },
      7: { id: "7", name: "Jul", maxDate: 30 },
      8: { id: "8", name: "Aug", maxDate: 31 },
      9: { id: "9", name: "Sep", maxDate: 30 },
      10: { id: "10", name: "Oct", maxDate: 31 },
      11: { id: "11", name: "Nov", maxDate: 30 },
      12: { id: "12", name: "Dec", maxDate: 31 },
    },
  },
};

const sliceInvoker = () => {
  return {
    name: "register",
    initialState,
    reducers: {},
    extraReducers: {},
  };
};

const registerSlice = createSlice(sliceInvoker());

export const {
  selectAll: selectAllMonthes,
  selectById: selectMonthById,
  selectEntities: selectMonthEntity,
} = registerAdapter.getSelectors((state) => state.register.fullYear);

export default registerSlice.reducer;
