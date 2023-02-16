import { createSlice } from '@reduxjs/toolkit';
import {initPosition} from "../../utils/const";

const initialState = {
  sideBar: false,
  searchTerm: "",
  position: initPosition,
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
    setSearchTerm: (state, {payload}) => {
      state.searchTerm = payload;
    },
    setPosition: (state, {payload}) => {
      state.position = payload;
    }
  }
});
/* eslint-enable no-param-reassign */

export const {
  showSideBar, hideSideBar, setSearchTerm, setPosition
} = UiSlice.actions;
export const { reducer } = UiSlice;