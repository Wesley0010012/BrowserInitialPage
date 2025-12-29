import { useContext } from "react";
import { GeolocationContext } from "./GeolocationContext";

export function UseGeolocationContext() {
  return useContext(GeolocationContext);
}
