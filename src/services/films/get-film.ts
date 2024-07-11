import api from "../Api";
import { Film } from "./model";

export const getFilm = async (filmId: string): Promise<Film> => {
  const result = await api.get(`films/${filmId}`);
  const { data } = result;

  return data;
};
