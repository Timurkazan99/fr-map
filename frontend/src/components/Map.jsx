import React from 'react';
import {MapContainer, TileLayer, useMap, ZoomControl} from "react-leaflet";
import {URL} from "../utils/const";
import '../styles/css/Map.css';
import Points from "./Points.jsx";

const Map = () => {
  const mapDir = 'static/map/{z}/{x}/{y}.png';
  const southWest = L.latLng(-62.10388252289787, -125.66796875);
  const northEast = L.latLng(66.72254132270653, 125.83203125000003);
  const bounds = L.latLngBounds(southWest, northEast);

  const position = [5.427246, -20.981957];
  const zoom = 3;

  return (
    <MapContainer
      center={position}
      zoom={zoom}
      zoomControl={false}
      maxBounds={bounds}
    >
      <ZoomControl position="topright" />
      <TileLayer
        url={`${URL}${mapDir}`}
        minZoom = "3"
        maxZoom = "6"
        tileSize={256}
        continuousWorld = {false}
        noWrap = {true}
      />
      <Points />
    </MapContainer>
  );
};

export default Map;