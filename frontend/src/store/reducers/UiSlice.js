import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sideBar: false,
};

/* eslint-disable no-param-reassign */
export const UiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showSideBar: (state) => {
      state.sideBar = true;
    },
    hideSideBar: (state) => {
      state.sideBar = false;
    },
  }
});
/* eslint-enable no-param-reassign */

export const {
  showSideBar, hideSideBar
} = UiSlice.actions;
export const { reducer } = UiSlice;