import type React from "react";
import { Title } from "../Title/main";
import { Clock } from "../Clock";
import { convertSecondsToTimeInformation, getGreeting } from "../../utils/time";
import styles from "./styles.module.css";

type ActualTimeInformationProps = React.HTMLAttributes<HTMLElement> & {
  actualTimeCounter: number;
};

export function ActualTimeInformation({
  actualTimeCounter,
  ...props
}: ActualTimeInformationProps): React.ReactNode {
  const { year, month, day, hours, minutes, seconds } =
    convertSecondsToTimeInformation(actualTimeCounter);

  const greeting = getGreeting(hours);

  return (
    <div {...props}>
      <Clock
        year={year}
        month={month}
        day={day}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        className={styles.clock}
      />
      <Title text={greeting} />
    </div>
  );
}
