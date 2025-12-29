import { createContext, type Dispatch, type SetStateAction } from "react";
import type { Coordinates } from "../../utils/coordinates";

export type GeolocationContextProps = {
  state: Coordinates | null;
  dispatch: Dispatch<SetStateAction<Coordinates | null>>;
};

const defaultGeolocationContextProps: GeolocationContextProps = {
  state: null,
  dispatch: () => {},
};

export const GeolocationContext = createContext<GeolocationContextProps>(
  defaultGeolocationContextProps
);
