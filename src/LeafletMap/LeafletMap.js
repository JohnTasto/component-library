import React, { PropTypes } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LeafletMap = ({ position, zoom, width, height, children }) => (
  <Map center={position} zoom={zoom} style={{ width, height }}>
    <TileLayer
      url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
    />
    {children}
  </Map>
);

LeafletMap.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
  zoom: PropTypes.number,
  children: PropTypes.node.isRequired,
  width: PropTypes.oneOfType(PropTypes.number, PropTypes.string),
  height: PropTypes.oneOfType(PropTypes.number, PropTypes.string),
};

LeafletMap.defaultProps = {
  position: [0, 0],
  zoom: 0,
  width: 800,
  height: 600,
};

export default LeafletMap;
