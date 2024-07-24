import api from "../Api";
import { PlanetApi } from "./model";

export const getPlanets = async (): Promise<PlanetApi[] | undefined> => {
  const result = await api.get("planets");
  const data = result.data.results;

  return data;
};
