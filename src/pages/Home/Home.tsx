import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Search, Tune } from "@mui/icons-material";

import { useAppContext } from "../../context/planetsContext";
import marsCollage from "../../assets/mars-collage.png";
import spaceship from "../../assets/spaceship.png";
import { Planet } from "../../services/planets/model";
import { SearchBy } from "./types";
import {
  FormContainer,
  Wrapper,
  WrapperContent,
  Button,
  DivNav,
  FilterSelectContainer,
  ResponsiveForm,
  ModalStyle,
} from "./Home.styles";
import {
  Box,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
  Tooltip,
  Typography,
} from "@mui/material";

interface SearchForm {
  value: string;
  searchBy: SearchBy;
}

const defaultValues: SearchForm = {
  value: "",
  searchBy: "name",
};

function Home() {
  const [filteredPlanets, setFilteredPlanets] = useState<Planet[]>([]);

  const { planets, isLoading, selectPlanet } = useAppContext();

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<SearchForm>({
    defaultValues,
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = (data: SearchForm) => {
    if (!data.value) {
      setFilteredPlanets(planets);
      return;
    }

    if (data.searchBy === "name") {
      const newFilteredPlanets = planets.filter((planet) =>
        planet.name.toLowerCase().includes(data.value.toLowerCase())
      );

      setFilteredPlanets(newFilteredPlanets);
      return;
    }

    if (data.searchBy === "population") {
      const newFilteredPlanets = planets.filter(
        (planet) => planet.population === data.value
      );

      setFilteredPlanets(newFilteredPlanets);
    }
  };

  const handlePlanetSelect = (planetId: string) => {
    selectPlanet(planetId);
    navigate("/detail");
  };

  useEffect(() => {
    setFilteredPlanets(planets);
  }, [planets]);

  return (
    <>
      <Wrapper>
        <WrapperContent>
          <img src={marsCollage} alt="" />
          <DivNav>
            <img src={spaceship} alt="Nave" />
          </DivNav>
        </WrapperContent>

        <FormContainer>
          <div>
            <p>
              Discover all the information about Planets of the Star Wars Saga
            </p>
            <ResponsiveForm>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Tooltip title="Clicando no campo vazio, ira mostrar todos os planetas">
                  <input
                    {...register("value")}
                    type="text"
                    placeholder="Enter the name in the planet"
                  />
                </Tooltip>
                <Button onClick={handleOpen} type="submit">
                  <Search /> Search
                </Button>

                {/* implementar filter  */}
                {/* <ResponsiveContainer> */}
                <FilterSelectContainer>
                  <Tune />
                  Filter
                  <RadioGroup row name="row-radio-buttons-group">
                    <FormControlLabel
                      value="name"
                      {...register("searchBy")}
                      control={<Radio />}
                      label="name"
                    />
                    <FormControlLabel
                      value="population"
                      {...register("searchBy")}
                      control={<Radio />}
                      label="Population"
                    />
                  </RadioGroup>
                </FilterSelectContainer>
                {/* </ResponsiveContainer> */}
              </form>
            </ResponsiveForm>
            {isLoading && <p>Loading...</p>}

            {!isLoading && filteredPlanets.length === 0 && (
              <p>No planet found</p>
            )}

            {/*  Antes de consultar os planetas, o usuario pode não saber o nome do planeta ou durante a pesquisa ele pode receber
             mais de uma opção com o valor pesquisado, por isso o modal */}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <ModalStyle>
                <Box>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Selecionar planeta desejado
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {!isLoading && filteredPlanets.length > 0 && (
                      <table>
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Population</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredPlanets.map((planet) => (
                            <tr key={planet.name}>
                              <td>{planet.name}</td>
                              <td>{planet.population}</td>
                              <td>
                                <button
                                  onClick={() => handlePlanetSelect(planet.id)}
                                >
                                  Abrir Planeta
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </Typography>
                </Box>
              </ModalStyle>
            </Modal>
          </div>
        </FormContainer>
      </Wrapper>
    </>
  );
}

export default Home;
