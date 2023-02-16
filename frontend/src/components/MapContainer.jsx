import React from 'react';
import {MapContainer as Container, TileLayer, ZoomControl} from "react-leaflet";
import {initPosition, URL} from "../utils/const";
import '../styles/css/Map.css';
import Points from "./Points.jsx";
import MapInit from "./MapInit.jsx";

const MapContainer = () => {
  const mapDir = 'static/map/{z}/{x}/{y}.png';
  const southWest = L.latLng(-62.10388252289787, -125.66796875);
  const northEast = L.latLng(66.72254132270653, 125.83203125000003);
  const bounds = L.latLngBounds(southWest, northEast);

  const zoom = 3;

  return (
    <Container
      center={initPosition}
      zoom={zoom}
      zoomControl={false}
      maxBounds={bounds}
    >
      <MapInit />
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
    </Container>
  );
};

export default MapContainer;