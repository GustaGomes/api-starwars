import { Film } from "../films/model";
import { Person } from "../people/model";

export interface PlanetApi {
  name: string;
  climate: string;
  terrain: string;
  population: string;
  residents: string[];
  films: string[];
}

export interface Planet extends PlanetApi {
  id: string;
  imageUrl: string;
  fullResidents?: Person[];
  fullFilms?: Film[];
}
