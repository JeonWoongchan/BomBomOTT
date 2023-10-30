import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const userData = createSlice({
    name: "userData",
    initialState: 'user1234',
    reducers: {
        setUserData: (state, action) => {
        return action.payload;
        },
    }
});

export const { setUserData } = userData.actions;

