import React, { Component } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "../../node_modules/leaflet/dist/leaflet.css";

const position = [33.13908, -96.107239];

class LeafletMapper extends Component {
  render() {
    return (
      <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    );
  }
}

export default LeafletMapper;
