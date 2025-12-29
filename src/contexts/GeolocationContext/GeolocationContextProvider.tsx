import React, { useEffect, useState } from "react";
import { GetCoordinates, type Coordinates } from "../../utils/coordinates";
import { GeolocationContext } from "./GeolocationContext";

type GeolocationContextProviderProps = {
  children: React.ReactNode;
};

export function GeolocationContextProvider({
  children,
}: GeolocationContextProviderProps) {
  const [state, setState] = useState<Coordinates | null>(null);

  useEffect(() => {
    GetCoordinates().then((coordinates) => setState(coordinates));
  }, []);

  return (
    <GeolocationContext.Provider
      value={{
        state,
        dispatch: setState,
      }}
    >
      {children}
    </GeolocationContext.Provider>
  );
}
