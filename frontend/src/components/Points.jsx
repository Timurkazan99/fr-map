import React from 'react';
import { FeatureGroup, Popup, Marker} from 'react-leaflet';
import L from 'leaflet';
import {URL} from "../utils/const";
import {batch, useDispatch, useSelector} from "react-redux";
import {selectors as pointSelectors} from "../store/reducers/PointSlice";
import {actions as pointActions} from "../store/reducers/PointSlice";
import {setSideBar} from "../store/reducers/UiSlice";

L.Icon.Default.imagePath = `${URL}assets/img/`;

const myStyle= {
  color: "green",
  weight: 3,
  opacity: 1,
  fillColor: "red",
  dashArray: '8 5'
}

const Points = () => {
  const dispatch = useDispatch();
  const points = useSelector(pointSelectors.selectAll);

  function onEachFeature(feature, layer){

    layer.on({
      click: (e) => {
        console.log(e);
        batch(() => {
          dispatch(pointActions.setActive(feature.id));
          dispatch(setSideBar("Info"));
        });
      }
    });
  }


  return (
    <FeatureGroup>
      {points.map((f) => (
        <Marker
          key={f.id}
          position={f.geometry.coordinates}
          style={myStyle}
          onEachFeature={onEachFeature}
          draggable={true}
        >
          <Popup>
            {f.properties.name}
          </Popup>
        </Marker>
      ))}
    </FeatureGroup>
  );
};

export default Points;