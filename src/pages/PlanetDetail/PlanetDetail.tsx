import React, { useEffect } from "react";
import { useAppContext } from "../../context/planetsContext";
import { useForm } from "react-hook-form";
import {
  BackButton,
  ContentImage,
  ContentPeople,
  DivData,
  DivImg,
  HeadDetail,
  WrapperDetail,
} from "./PlanetDetail.styles";
import {
  Groups,
  Person,
  Terrain,
  Thermostat,
  MovieFilter,
  Autorenew,
} from "@mui/icons-material";
import { Divider, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";

type FormData = {
  name: string;
};

const PlanetDetail: React.FC = () => {
  const navigate = useNavigate();
  const { editPlanet, selectedPlanet, isLoading } = useAppContext();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    if (!selectedPlanet) return;

    editPlanet(selectedPlanet.id, { name: data.name });

    window.alert("Nome do planeta alterado com sucesso!");
  };

  useEffect(() => {
    if (selectedPlanet) {
      setValue("name", selectedPlanet.name);
    }
  }, [selectedPlanet, setValue]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!selectedPlanet) {
    return <div>No planet selected</div>;
  }

  return (
    <>
      <WrapperDetail>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ContentImage>
            <DivImg>
              <img
                width="82.41px"
                height="82.41px"
                src={selectedPlanet.imageUrl}
                alt=""
              />
              <div>
                <p>Planet:</p>
                <input
                  type="text"
                  {...register("name", {
                    required: "Este campo é obrigatório",
                  })}
                />
                <Tooltip title="Alterar nome do planeta">
                  <button type="submit">
                    <Autorenew fontSize="small" />
                  </button>
                </Tooltip>
                {errors.name && <span>{errors.name.message}</span>}
              </div>
            </DivImg>
            <DivData>
              <div>
                <Thermostat sx={{ marginRight: "5px" }} />
                Climate: <span>{selectedPlanet.climate}</span>
              </div>
              <div>
                <Terrain sx={{ marginRight: "5px" }} />
                Terrain: <span>{selectedPlanet.terrain}</span>
              </div>
              <div>
                <Groups sx={{ marginRight: "5px" }} />
                Population: <span>{selectedPlanet.population}</span>
              </div>
            </DivData>
          </ContentImage>
          <ContentPeople>
            <HeadDetail>
              <Person /> Residents({selectedPlanet.fullResidents?.length || 0}):
            </HeadDetail>
            <Divider />
            <div>
              {selectedPlanet.fullResidents?.map((resident) => (
                <p key={resident.name}>{resident.name},</p>
              ))}
            </div>
          </ContentPeople>
          <ContentPeople>
            <HeadDetail>
              <MovieFilter /> Films({selectedPlanet.fullFilms?.length || 0}):
            </HeadDetail>
            <Divider />
            <div>
              {selectedPlanet.fullFilms?.map((film) => (
                <p key={film.title}>{film.title}, </p>
              ))}
            </div>
          </ContentPeople>
        </form>
      </WrapperDetail>
      <BackButton onClick={() => navigate("/")}>{`< voltar`}</BackButton>
    </>
  );
};

export default PlanetDetail;
