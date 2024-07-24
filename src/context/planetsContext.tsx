import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { Planet } from "../services/planets/model";
import { getPlanets } from "../services/planets/getPlanets";
import { parsePlanets } from "../utils/parsePlanets";
import { getFilm } from "../services/films/get-film";
import { getPeople } from "../services/people/get-people";

interface AppContextType {
  planets: Planet[];
  isLoading: boolean;
  selectedPlanet: Planet | undefined;
  selectPlanet: (planetId: string) => void;
  editPlanet: (planetId: string, data: Partial<Planet>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState<Planet>();

  const editPlanet = (planetId: string, data: Partial<Planet>) => {
    const newPlanets = planets.map((planet) => {
      if (planet.id === planetId) {
        return { ...planet, ...data };
      }

      return planet;
    });

    setPlanets(newPlanets);
  };

  // Buscar os dados dos planetas usando o getPlanets
  const fetchPlanets = async () => {
    setIsLoading(true);

    try {
      const data = await getPlanets();

      if (!data) return;

      const newPlanets = parsePlanets(data);

      setPlanets(newPlanets);
    } catch (err) {
      console.log("erro", err);
      window.alert("Erro ao carregar planetas");
    }

    setIsLoading(false);
  };

  // Selecionar um planeta pelo id e carregar suas informações
  const selectPlanet = async (planetId: string) => {
    const allplanets = [...planets];
    const foundIndex = allplanets.findIndex((planet) => planet.id === planetId);
    const foundPlanet = allplanets[foundIndex];

    if (!foundPlanet) {
      return;
    }

    setIsLoading(true);

    if (!foundPlanet.fullFilms) {
      const films = foundPlanet.films.map(async (url) => {
        const filmId = url.split("/").slice(-2)[0];
        const data = await getFilm(filmId);
        return data;
      });

      foundPlanet.fullFilms = await Promise.all(films);
    }

    if (!foundPlanet.fullResidents) {
      const residents = foundPlanet.residents.map(async (url) => {
        const personId = url.split("/").slice(-2)[0];
        const data = await getPeople(personId);
        return data;
      });

      foundPlanet.fullResidents = await Promise.all(residents);
    }

    allplanets[foundIndex] = foundPlanet;

    setIsLoading(false);
    setPlanets(allplanets);
    setSelectedPlanet(foundPlanet);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <AppContext.Provider
      value={{
        planets,
        selectedPlanet,
        isLoading,
        selectPlanet,
        editPlanet,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Exportar o contexto
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
