import React from 'react';
import {getVisiblePoints} from "../store/selectors";
import {batch, useDispatch, useSelector} from "react-redux";
import "../styles/scss/SearchResult.scss";
import {setPosition} from "../store/reducers/UiSlice";
import {actions as pointActions} from "../store/reducers/PointSlice";

const SearchTab = ({setSearch}) => {
  const dispatch = useDispatch();
  const points = useSelector(getVisiblePoints);

  const handleClick = (point) => {
    const [lng, lat] = point.geometry.coordinates;
    batch(() => {
      dispatch(setPosition([lat, lng]));
      dispatch(pointActions.setActive(point.id));
      setSearch(false);
    })
  }

  return (
    <div className="search-list">
      <ul>
        {points.map((point) => (
          <li>
            <button
              onClick={() => handleClick(point)}
            >
              {point?.properties?.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchTab;