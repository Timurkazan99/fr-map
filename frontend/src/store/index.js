import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as uiSlice } from './reducers/UiSlice';
import { reducer as pointSlice } from './reducers/PointSlice';


const rootReducer = combineReducers({
  ui: uiSlice,
  points: pointSlice,
});

export default function setupStore() {
  return configureStore({
    reducer: rootReducer,
  });
}