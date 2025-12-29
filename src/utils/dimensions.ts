export type ScreenDimension = {
  width: number;
  height: number;
};

export function GetScreenDimension(): ScreenDimension {
  const { innerWidth, innerHeight } = window;

  return {
    width: innerWidth,
    height: innerHeight,
  };
}
