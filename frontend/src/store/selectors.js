import {selectors as pointSelector} from "./reducers/PointSlice";

export const getSideBarShow = (state) => state.ui.sideBar;

export const getActivePoint = (state) => {
  const id = state.points.active;
  return pointSelector.selectById(state, id);
};