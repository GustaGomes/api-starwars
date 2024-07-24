import { Planet } from "../services/planets/model";
import { PLANET_IMAGES } from "./constants";

// TODO Aqui eu tenho que pegar o nome do planeta e colocar o caminho da imagem
// PLANET_IMAGES guarda as imagens de cada planeta.

export const parsePlanet = (planet: Planet): Planet => {
  const planetImage =
    PLANET_IMAGES[planet.name.toLowerCase() as keyof typeof PLANET_IMAGES];

  return {
    ...planet,
    imageUrl: planetImage,
  };
};
