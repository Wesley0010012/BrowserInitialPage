import type React from "react";
import type { LocationInformation as LocationInformationType } from "../../utils/location";
import styles from "./styles.module.css";

type LocationInformationProps = React.HTMLAttributes<HTMLElement> & {
  location: LocationInformationType | null;
};

export function LocationInformation({
  location,
  ...props
}: LocationInformationProps) {
  return (
    <div className={styles.locationCard} {...props}>
      <h1>Location</h1>
      {location && (
        <>
          <div className={styles.grid}>
            <div className={styles.item}>
              <span>Country</span>
              <strong>{location.country}</strong>
            </div>

            <div className={styles.item}>
              <span>State</span>
              <strong>{location.state}</strong>
            </div>

            <div className={styles.item}>
              <span>City</span>
              <strong>{location.city}</strong>
            </div>

            <div className={styles.item}>
              <span>Street</span>
              <strong>{location.street}</strong>
            </div>
          </div>
        </>
      )}

      {!location && (
        <>
          <h3>Cannot get Location</h3>
        </>
      )}
    </div>
  );
}
