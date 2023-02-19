import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getSideBar} from "../store/selectors";
import "../styles/scss/ControlButton.scss";
import {setSideBar} from "../store/reducers/UiSlice";

const ControlButton = () => {

  const dispatch = useDispatch();
  const show = useSelector(getSideBar);
  const clickHandler = () => {
    if (show === "") {
      dispatch(setSideBar("Search"));
    } else {
      dispatch(setSideBar(""));
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