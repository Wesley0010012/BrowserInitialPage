import type { Coordinates } from "./coordinates";

export type LocationInformation = {
  city: string;
  state: string;
  country: string;
  street: string;
};

export async function GetLocationByCoordinates(
  coordinates: Coordinates | null
): Promise<LocationInformation | null> {
  try {
    if (!coordinates) {
      return null;
    }

    return {
      city: "any_city",
      country: "any_country",
      state: "any_state",
      street: "any_street",
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e: unknown) {
    return null;
  }
}
