export type Coordinates = {
  latitude: number;
  longitude: number;
};

export function askToGetCoordinates(): Promise<Coordinates> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation não suportada pelo browser"));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        resolve({ latitude, longitude });
      },
      (error) => {
        reject(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  });
}

export async function GetCoordinates(): Promise<Coordinates | null> {
  try {
    return await askToGetCoordinates();
  } catch {
    return null;
  }
}
