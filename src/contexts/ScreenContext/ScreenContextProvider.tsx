import React, { useState } from "react";
import {
  GetScreenDimension,
  type ScreenDimension,
} from "../../utils/dimensions";
import { ScreenContext } from "./ScreenContext";

type ScreenContextProps = {
  children: React.ReactNode;
};

export function ScreenContextProvider({ children }: ScreenContextProps) {
  const [state, setState] = useState<ScreenDimension | null>(
    GetScreenDimension()
  );

  return (
    <ScreenContext.Provider
      value={{
        state,
        dispatch: setState,
      }}
    >
      {children}
    </ScreenContext.Provider>
  );
}
