const DARK_PICSUM_IDS = [1011, 1015, 1024, 1031, 1039, 1043, 1050, 1062, 1074];

export async function FetchRandomImage(
  width: number,
  height: number
): Promise<string> {
  const position = Math.floor(Math.random() * DARK_PICSUM_IDS.length);

  const response = await fetch(
    `https://picsum.photos/id/${DARK_PICSUM_IDS[position]}/${width}/${height}`
  );
  const blob = await response.blob();

  const path = URL.createObjectURL(blob);

  return path;
}
