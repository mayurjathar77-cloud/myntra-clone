import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
  name: "orders",
  initialState: [],
  reducers: {
    addOrder: (state, action) => {
      state.push({
        ...action.payload,
        id: Date.now(),
        timestamp: new Date().toISOString(),
      });
    },
    clearOrders: (state) => {
      return [];
    },
  },
});

export const ordersActions = ordersSlice.actions;
export default ordersSlice;
