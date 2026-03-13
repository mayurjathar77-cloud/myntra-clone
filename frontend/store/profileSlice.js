import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_PROFILE } from "../data/profile";

const profileSlice = createSlice({
    name: 'profile',
    initialState: DEFAULT_PROFILE,
    reducers: {
        updateProfile: (state, action) => {
            return action.payload;
        }
    }
});

export const profileActions = profileSlice.actions;
export default profileSlice;
