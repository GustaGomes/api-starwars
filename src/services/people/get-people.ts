import api from "../Api";
import { Person } from "./model";

export const getPeople = async (personId: string): Promise<Person> => {
  const result = await api.get(`people/${personId}`);
  const { data } = result;

  return data;
};
