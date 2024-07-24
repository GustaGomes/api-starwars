import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useMemo,
} from "react";
import { Planet } from "../services/planets/model";
import { getPlanets } from "../services/planets/getPlanets";
import { parsePlanet } from "../utils/parsePlanet";
import { getFilm } from "../services/films/get-film";
import { getPeople } from "../services/people/get-people";

interface AppContextType {
  selectedPlanet: Planet | undefined;
  isLoadingData: boolean;
  editPlanet: (name: string) => void;
  getPlanetByName: (name: string) => Planet | undefined;
  selectPlanet: (name: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | undefined>();

  const getPlanetByName = (name: string) => {
    const foundPlanet = planets.find(
      (planet) => planet.name.toLowerCase() === name.toLowerCase()
    );

    return foundPlanet;
  };

  const editPlanet = (name: string) => {
    if (!selectedPlanet) return;

    const newPlanets = planets.map((planet) => {
      if (planet.name === selectedPlanet.name) {
        return { ...planet, name };
      }
      return planet;
    });

    setPlanets(newPlanets);
    setSelectedPlanet({ ...selectedPlanet, name });
    alert("Planeta atualizado");
  };

  // Buscar os dados dos planetas usando o getPlanets
  const fetchPlanets = async () => {
    try {
      const data = await getPlanets();

      if (!data) return;

      const newPlanets = data.map((planet) => parsePlanet(planet));

      setPlanets(newPlanets);
    } catch (err) {
      console.log("erro", err);
      window.alert("Erro ao carregar planetas");
    }
  };

  // Selecionar um planeta pelo nome e carregar suas informações
  const selectPlanet = async (name: string) => {
    setIsLoadingData(true);

    const currentPlanets = [...planets];
    const index = currentPlanets.findIndex(
      (p) => p.name.toLowerCase() === name.toLowerCase()
    );
    const planet = currentPlanets[index];
    // usar getFilm e getPeople para carregar as informações dos planetas para evitar mais chamadas na api
    try {
      if (!planet.fullFilms) {
        const films = planet.films.map(async (url) => {
          const filmId = url.split("/").slice(-2)[0];
          const data = await getFilm(filmId);
          return data;
        });

        planet.fullFilms = await Promise.all(films);
      }

      if (!planet.fullResidents) {
        const residents = planet.residents.map(async (url) => {
          const personId = url.split("/").slice(-2)[0];
          const data = await getPeople(personId);
          return data;
        });

        planet.fullResidents = await Promise.all(residents);
      }
    } catch (error) {
      window.alert("Erro ao carregar informações do planeta");
    }

    currentPlanets[index] = planet;
    setPlanets(currentPlanets);
    setSelectedPlanet(planet);
    setIsLoadingData(false);
  };

  // Memorizar o planeta selecionado
  const memoizedPlanet = useMemo(() => {
    if (!selectedPlanet) return;

    return {
      ...selectedPlanet,
      fullFilms: selectedPlanet.fullFilms,
      fullResidents: selectedPlanet.fullResidents,
    };
  }, [selectedPlanet]);

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <AppContext.Provider
      value={{
        selectedPlanet: memoizedPlanet,
        isLoadingData,
        getPlanetByName,
        editPlanet,
        selectPlanet,
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
