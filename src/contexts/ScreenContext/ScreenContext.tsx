import { createContext, type Dispatch, type SetStateAction } from "react";
import type { ScreenDimension } from "../../utils/dimensions";

export type ScreenContextProps = {
  state: ScreenDimension | null;
  dispatch: Dispatch<SetStateAction<ScreenDimension | null>>;
};

const defaultScreenContextProps: ScreenContextProps = {
  state: null,
  dispatch: () => {},
};

export const ScreenContext = createContext<ScreenContextProps>(
  defaultScreenContextProps
);
