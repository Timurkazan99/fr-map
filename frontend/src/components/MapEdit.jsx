import React from 'react';

import "leaflet-draw/dist/leaflet.draw.css";
import {FeatureGroup} from "react-leaflet";
import {EditControl} from "react-leaflet-draw";
import {useDispatch} from "react-redux";
import {setSideBar} from "../store/reducers/UiSlice";

const MapEdit = () => {
  const dispatch = useDispatch();

  const onCreated = ({layerType, layer}) => {
    layer.on({
      click: (e) => {
        console.log(e);
        dispatch(setSideBar("Edit"))
      }
    });
  }

  return (
    <FeatureGroup>
      <EditControl
        position='topright'
        onCreated={onCreated}
        draw={{
          rectangle: false,
          circle: false,
          circlemarker: false,
        }}
        edit={{
          edit: false,
          remove: false
        }}
      />
    </FeatureGroup>
  );
};

export default MapEdit;