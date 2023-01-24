import React, {useEffect} from 'react';
import Map from "./components/Map.jsx";
import SideBar from "./components/SideBar.jsx";
import {useDispatch} from "react-redux";
import fetchPoints from "./store/thunks/fetchPoints";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPoints());
  }, [])

  return (
    <>
      <SideBar/>
      <Map />
    </>
  );
}

export default App;
