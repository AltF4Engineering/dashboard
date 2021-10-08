import React, { Component } from "react";
import "../../node_modules/leaflet/dist/leaflet.css";
import LeafletMapper from "./leaflet-mapper";

class Map extends Component {
  render() {
    return <LeafletMapper />;
  }
}

export default Map;
