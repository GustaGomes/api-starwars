import { Film } from "../films/model";
import { Person } from "../people/model";

export type Planet = {
  name: string;
  climate: string;
  terrain: string;
  population: number | string;
  residents: string[];
  films: string[];
  imageUrl?: string;
  fullResidents?: Person[];
  fullFilms?: Film[];
};
