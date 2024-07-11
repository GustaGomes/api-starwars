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
} from "@mui/icons-material";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

type FormData = {
  name: string;
};

const PlanetDetail: React.FC = () => {
  const navigate = useNavigate();
  const { selectedPlanet, editPlanet, isLoadingData } = useAppContext();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    editPlanet(data.name);
  };

  useEffect(() => {
    if (!selectedPlanet) return;
    setValue("name", selectedPlanet.name);
  }, [selectedPlanet, setValue]);

  if (isLoadingData) {
    return <div>Carregando...</div>;
  }

  if (!selectedPlanet) {
    return <div>Planeta não encontrado</div>;
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
                <button type="submit">Salvar</button>
                {errors.name && <span>{errors.name.message}</span>}
              </div>
            </DivImg>
            <DivData>
              <div>
                <Thermostat />
                Climate: <span>{selectedPlanet.climate}</span>
              </div>
              <div>
                <Terrain />
                Terrain: <span>{selectedPlanet.terrain}</span>
              </div>
              <div>
                <Groups />
                Population: <span>{selectedPlanet.population}</span>
              </div>
            </DivData>
          </ContentImage>
          <ContentPeople>
            <HeadDetail>
              <Person /> Residents:
            </HeadDetail>
            <Divider />
            <div>
              {selectedPlanet?.fullResidents?.map((resident) => (
                <p key={resident.name}>{resident.name},</p>
              ))}
            </div>
          </ContentPeople>
          <ContentPeople>
            <HeadDetail>
              <MovieFilter /> Films({selectedPlanet?.fullFilms?.length}):
            </HeadDetail>
            <Divider />
            <div>
              {selectedPlanet?.fullFilms?.map((film) => (
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
