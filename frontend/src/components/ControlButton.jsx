import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getSideBarShow} from "../store/selectors";
import "../styles/scss/ControlButton.scss";
import {hideSideBar, showSideBar} from "../store/reducers/UiSlice";

const ControlButton = () => {

  const dispatch = useDispatch();
  const show = useSelector(getSideBarShow);
  const clickHandler = () => {
    if (show) {
      dispatch(hideSideBar());
    } else {
      dispatch(showSideBar());
    }
  }

  return (
    <button
      className={show ? "control-button active" : "control-button"}
      onClick={clickHandler}
    >
      >>
    </button>
  );
};

export default ControlButton;