import { Planet, PlanetApi } from "../services/planets/model";
import { PLANET_IMAGES, type PlanetsNames } from "./constants";

// TODO Aqui eu tenho que pegar o nome do planeta e colocar o caminho da imagem
// PLANET_IMAGES guarda as imagens de cada planeta.

export const parsePlanets = (planets: PlanetApi[]): Planet[] => {
  const newPlanets = planets.map((planet, index) => ({
    ...planet,
    id: `planet_${index}`,
    imageUrl: PLANET_IMAGES[planet.name.toLowerCase() as PlanetsNames],
  }));

  return newPlanets;
};
