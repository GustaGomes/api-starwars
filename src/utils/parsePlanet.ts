import { Planet } from "../services/planets/model";
import { PLANET_IMAGES } from "./constants";

export const parsePlanet = (planet: Planet): Planet => {
  const planetImage =
    PLANET_IMAGES[planet.name.toLowerCase() as keyof typeof PLANET_IMAGES];

  return {
    ...planet,
    imageUrl: planetImage,
  };
};
