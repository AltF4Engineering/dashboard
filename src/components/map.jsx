import React from "react";
import "../../node_modules/leaflet/dist/leaflet.css";
import LeafletMapper from "./leaflet-mapper";
import firestore from "../util/firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import { useSelector, useDispatch } from "react-redux";
import { setLocations } from "./map-slice";

async function getLocations() {
  const locationsCol = collection(firestore, "locations");
  const locationsSnap = await getDocs(locationsCol);
  const locationList = locationsSnap.docs.map((doc) => doc.data());
  return locationList;
}

const Map = () => {
  const dispatch = useDispatch();

  getLocations().then((result) => {
    dispatch(setLocations(result));
  });

  return <LeafletMapper />;
};

export default Map;
