import React from 'react';
import {GeoJSON, FeatureGroup, Popup} from 'react-leaflet';
import L from 'leaflet';
import {URL} from "../utils/const";
import {useDispatch, useSelector} from "react-redux";
import {selectors as pointSelectors} from "../store/reducers/PointSlice";
import {actions as pointActions} from "../store/reducers/PointSlice";
import {showSideBar} from "../store/reducers/UiSlice";

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
      click: () => {
        dispatch(pointActions.setActive(feature.id));
        dispatch(showSideBar());
      }
    });
  }

  return (
    <FeatureGroup>
      {points.map((f) => (
        <GeoJSON
          key={f.properties.id}
          data={f}
          style={myStyle}
          onEachFeature={onEachFeature}
        >
          <Popup show={true}>
            {f.properties.name}
          </Popup>
        </GeoJSON>
      ))}
    </FeatureGroup>
  );
};

export default Points;