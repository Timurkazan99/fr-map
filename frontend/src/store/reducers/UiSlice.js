import { createSlice } from '@reduxjs/toolkit';
import {initPosition} from "../../utils/const";

const initialState = {
  sideBar: "",
  searchTerm: "",
  position: initPosition,
};

/* eslint-disable no-param-reassign */
export const UiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setSideBar: (state, {payload}) => {
      state.sideBar = payload;
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
  setSideBar, setSearchTerm, setPosition
} = UiSlice.actions;
export const { reducer } = UiSlice;