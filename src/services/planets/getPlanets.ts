import api from "../Api";
import { Planet } from "./model";

export const getPlanets = async (): Promise<Planet[] | undefined> => {
  const result = await api.get("planets");
  const data = result.data.results;

  return data;
};
