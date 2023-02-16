import {booleanIntersects, polygon} from '@turf/turf';
import {selectors as pointSelector} from "./reducers/PointSlice";


export const getSideBarShow = (state) => state.ui.sideBar;

export const getSearchTerm = (state) => state.ui.searchTerm;

export const getActivePoint = (state) => {
  const id = state.points.active;
  return pointSelector.selectById(state, id);
};

export const getVisiblePoints = (state) => {
  const visible = [];
  const invisible = [];
  const points = pointSelector.selectAll(state);
  const rect = polygon([state.points.bounds]);
  points.forEach((point) => {
    if(booleanIntersects(point.geometry, rect)) {
      visible.push(point)
    } else {
      invisible.push(point)
    }
  });

  const result = [...visible, ...invisible];
  const searchTerm = state.ui.searchTerm;

  if(searchTerm === "") {
    return result;
  }

  return result.filter(({properties}) => properties.name.toLowerCase().match(searchTerm.toLowerCase()))
};