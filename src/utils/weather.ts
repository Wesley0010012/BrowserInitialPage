import type { Coordinates } from "./coordinates";

export type TemperatureInformation = {
  value: number;
  unit: string;
};

export async function GetTemperature(
  coordinates: Coordinates | null
): Promise<TemperatureInformation | null> {
  try {
    if (!coordinates) {
      return null;
    }

    const data = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&current_weather=true`
    );

    const response = await data.json();

    const unit = response.current_weather_units.temperature;
    const value = response.current_weather.temperature;

    return {
      unit,
      value,
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e: unknown) {
    return null;
  }
}
