import React, {useEffect, useState} from 'react';
import {GeoJSON, FeatureGroup, Popup, useMap, Marker} from 'react-leaflet';
import {fetchPoints} from "../http/pointsApi";
import L from 'leaflet';
import {URL} from "../utils/const";
import {logDOM} from "@testing-library/react";

L.Icon.Default.imagePath = `${URL}assets/img/`;

const myStyle= {
  color: "green",
  weight: 3,
  opacity: 1,
  fillColor: "red",
  dashArray: '8 5'
}

function onEachFeature(feature, layer){

  layer.on({
    click: () => console.log(feature.properties, layer)
  });
}

const Points = () => {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    fetchPoints().then((res) => setPoints(res.features))
  }, [])

  return (
    <FeatureGroup>
      {points.map((f) => (
        <GeoJSON key={f.properties.id} data={f} style={myStyle} onEachFeature={onEachFeature}>
        </GeoJSON>

      ))}
    </FeatureGroup>
  );
};

export default Points;