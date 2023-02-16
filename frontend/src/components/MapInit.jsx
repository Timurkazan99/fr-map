import React, {useEffect} from 'react';
import {useMap, useMapEvents} from "react-leaflet";
import {actions as pointActions} from "../store/reducers/PointSlice";
import {useDispatch, useSelector} from "react-redux";

const MapInit = () => {
  const dispatch = useDispatch();
  const position = useSelector((state) => state.ui.position);
  const maxZoom = 6;

  const map = useMap();
  const mapEvents = useMapEvents({
    moveend: () => {
      const bounds = mapEvents.getBounds();
      const payload = [bounds.getNorth(), bounds.getWest(), bounds.getSouth(), bounds.getEast()];
      dispatch(pointActions.setBounds(payload));
    }
  });

  useEffect(() => {
    const bounds = map.getBounds();
    const payload = [bounds.getNorth(), bounds.getWest(), bounds.getSouth(), bounds.getEast()];
    dispatch(pointActions.setBounds(payload));
  }, []);

  useEffect(() => {
    map.flyTo(position, maxZoom, {animate: true});
  }, [position])

  return null
};

export default MapInit;