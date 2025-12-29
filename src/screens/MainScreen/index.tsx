import type React from "react";
import { BackgroundImage } from "../../components/BackgroundImage";
import styles from "./styles.module.css";
import { UseScreenContext } from "../../contexts/ScreenContext/UseScreenContext";
import { useEffect, useState } from "react";
import { FetchRandomImage } from "../../utils/FetchRandomImage";
import { ActualTimeInformation } from "../../components/ActualTimeInformation";
import { WeatherInformation } from "../../components/WeatherInformation";
import {
  GetTemperature,
  type TemperatureInformation,
} from "../../utils/weather";
import { UseGeolocationContext } from "../../contexts/GeolocationContext/UseGeolocationContext";
import { SearchBar } from "../../components/SearchBar";
import ClockCounterWorker from "../../workers/ClockCounterWorker.ts?worker";

export function MainScreen(): React.ReactNode {
  const { state: screenState } = UseScreenContext();
  const { state: geolocationState } = UseGeolocationContext();
  const [image, setImage] = useState<string | null>(null);
  const [actualCounter, setActualCounter] = useState<number>(0);
  const [temperature, setTemperature] = useState<TemperatureInformation | null>(
    null
  );
  const [, setWorker] = useState<Worker | null>(null);

  useEffect(() => {
    const newWorker = new ClockCounterWorker();
    setWorker(newWorker);

    newWorker.onmessage = (event: MessageEvent<number>) => {
      setActualCounter(event.data);
    };

    newWorker.postMessage("start");

    return () => {
      newWorker.postMessage("stop");
      newWorker.terminate();
    };
  }, []);

  useEffect(() => {
    if (!screenState) return;

    FetchRandomImage(screenState.width, screenState.height).then((image) => {
      setImage(image);
      setActualCounter(Math.floor(Date.now() / 1000));
    });
  }, [screenState]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActualCounter((state) => state + 1);
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  useEffect(() => {
    if (!geolocationState) {
      return;
    }

    GetTemperature(geolocationState).then((temperature) =>
      setTemperature(temperature)
    );

    // GetLocationByCoordinates(geolocationState).then((location) =>
    //   setLocation(location)
    // );
  }, [geolocationState]);

  return (
    <>
      <BackgroundImage
        className={styles.background}
        width={screenState?.width}
        height={screenState?.height}
        src={image ?? undefined}
      />
      <div className={styles.lateralContainer}>
        <WeatherInformation temperature={temperature} />
        {/* <LocationInformation location={location} /> */}
      </div>
      <div className={styles.centeredContainer}>
        <ActualTimeInformation actualTimeCounter={actualCounter} />
        <SearchBar />
      </div>
    </>
  );
}
