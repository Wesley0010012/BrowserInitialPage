import "./App.css";
import { GeolocationContextProvider } from "./contexts/GeolocationContext/GeolocationContextProvider";
import { ScreenContextProvider } from "./contexts/ScreenContext/ScreenContextProvider";
import { MainScreen } from "./screens/MainScreen";

function App() {
  return (
    <>
      <ScreenContextProvider>
        <GeolocationContextProvider>
          <MainScreen />
        </GeolocationContextProvider>
      </ScreenContextProvider>
    </>
  );
}

export default App;
