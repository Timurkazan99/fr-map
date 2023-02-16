import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import thunkFetchPoints from '../thunks/fetchPoints'

const pointsAdapter = createEntityAdapter();
const initialState = pointsAdapter.getInitialState({
  selected: null,
  active: null,
  loading: null,
  error: null,
  bounds: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
});

export const pointsSlice = createSlice({
  name: 'points',
  initialState,
  reducers: {
    setActive: (state, action) => {
      state.active = action.payload;
    },
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
    setBounds: (state, action) => {
      const [north, west, south, east ] = action.payload;
      state.bounds = [
        [west, north],
        [east, north],
        [east, south],
        [west, south],
        [west, north]
      ]
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(thunkFetchPoints.pending, (state) => {
        state.loading = 'loading';
        state.error = null;
      })
      .addCase(thunkFetchPoints.fulfilled, (state, action) => {
        const points = action.payload;
        pointsAdapter.addMany(state, points);
        state.loading = 'loaded';
        state.error = null;
      })
      .addCase(thunkFetchPoints.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error;
      })
  }
});

export const selectors = pointsAdapter.getSelectors((state) => state.points);
export const { actions } = pointsSlice;
export const { reducer } = pointsSlice;