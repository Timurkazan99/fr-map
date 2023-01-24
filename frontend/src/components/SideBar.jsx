import React from 'react';
import '../styles/css/Sidebar.css';
import {getActivePoint, getSideBarShow} from "../store/selectors";
import {useDispatch, useSelector} from "react-redux";
import {hideSideBar} from "../store/reducers/UiSlice";

const SideBar = () => {
  const dispatch = useDispatch();
  const show = useSelector(getSideBarShow);
  const point = useSelector(getActivePoint)

  return (
    show && (
      <div className="sidebar">
        <div className="sidebar-header">
          <span>{point.properties.name}</span>
          <button
            onClick={() => dispatch(hideSideBar())}
          >
            close
          </button>
        </div>
        <div className="sidebar-content">
          Описание точки {point.properties.name}
        </div>
      </div>
    )
  );
};

export default SideBar;