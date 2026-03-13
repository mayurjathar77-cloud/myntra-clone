import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        selected: 'All'
    },
    reducers: {
        setCategory: (state, action) => {
            state.selected = action.payload;
        }
    }
});

export const categoryActions = categorySlice.actions;
export default categorySlice;
