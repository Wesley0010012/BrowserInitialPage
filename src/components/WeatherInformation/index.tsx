import type React from "react";
import type { TemperatureInformation } from "../../utils/weather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.css";
import { Title } from "../Title/main";

type WeatherInformationProps = React.HTMLAttributes<HTMLElement> & {
  temperature: TemperatureInformation | null;
};

export function WeatherInformation({
  temperature,
  className,
  ...props
}: WeatherInformationProps) {
  return (
    <div className={`${styles.weatherCard} ${className ?? ""}`} {...props}>
      <div className={styles.weatherTop}>
        <FontAwesomeIcon color="white" size={"3x"} icon={faCloud} />
        <Title
          className={styles.weatherFontSize}
          text={
            temperature
              ? `${temperature.value.toString()} ${temperature.unit}`
              : "N/A"
          }
        />
      </div>
      {!temperature && (
        <h3 className={styles.weatherFontSize}>Cannot get Temperature</h3>
      )}
    </div>
  );
}
