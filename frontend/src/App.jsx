import React, {useEffect} from 'react';
import MapContainer from "./components/MapContainer.jsx";
import SideBar from "./components/SideBar.jsx";
import {useDispatch} from "react-redux";
import fetchPoints from "./store/thunks/fetchPoints";
import ControlButton from "./components/ControlButton.jsx";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPoints());
  }, [])

  return (
    <>
      <SideBar />
      <ControlButton />
      <MapContainer />
    </>
  );
}

export default App;
