import React from 'react';
import '../styles/scss/Sidebar.scss';
import {getSideBar} from "../store/selectors";
import {useSelector} from "react-redux";
import SearchTab from "./SearchTab.jsx";
import LocationInfo from "./LocationInfo.jsx";
import EditLocation from "./EditLocation.jsx";

const sideBarMap = {
  Search: SearchTab,
  Info: LocationInfo,
  Edit: EditLocation,
}

const SideBar = () => {
  const show = useSelector(getSideBar);
  const Component = show !== "" ? sideBarMap?.[show] : () => (<></>);

  return (
    <div className={show ? 'sidebar active' : 'sidebar'}>
      <Component />
    </div>
  );
};

export default SideBar;