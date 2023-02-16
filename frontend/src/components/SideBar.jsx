import React, {useState} from 'react';
import '../styles/scss/Sidebar.scss';
import {getSideBarShow} from "../store/selectors";
import {useSelector} from "react-redux";
import SearchInput from "./SearchInput.jsx";
import SearchTab from "./SearchTab.jsx";
import LocationInfo from "./LocationInfo.jsx";

const SideBar = () => {
  const show = useSelector(getSideBarShow);
  const [search, setSearch] = useState(true);

  return (
    <div className={show ? 'sidebar active' : 'sidebar'}>
      {
        search ? <><SearchInput /><SearchTab setSearch={setSearch}/></> : <LocationInfo setSearch={setSearch}/>
      }
    </div>
  );
};

export default SideBar;