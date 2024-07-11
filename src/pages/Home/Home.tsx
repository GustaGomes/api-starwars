import { FormContainer, Wrapper, WrapperContent, Button } from "./Home.styles";
import { Search } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { useAppContext } from "../../context/planetsContext";
import { useNavigate } from "react-router-dom";
import marsCollage from "../../assets/mars-collage.png";

interface SearchForm {
  name: string;
}

function Home() {
  const { register, handleSubmit } = useForm<SearchForm>();
  const { getPlanetByName, selectPlanet } = useAppContext();

  const navigate = useNavigate();

  const onSubmit = (data: SearchForm) => {
    const foundPlanet = getPlanetByName(data.name);

    if (!foundPlanet) {
      window.alert("Planeta não encontrado.");
    } else {
      selectPlanet(data.name);
      navigate("/detail");
    }
  };

  return (
    <>
      <Wrapper>
        <WrapperContent>
          <img src={marsCollage} alt="" />
          {/* <DivNav>
            <img src={spaceship} alt="Nave" />
          </DivNav> */}
        </WrapperContent>

        <FormContainer>
          <div>
            <p>
              Discover all the information about Planets of the Star Wars Saga
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name")}
                type="text"
                placeholder="Enter the name in the planet"
              />
              <Button type="submit">
                <Search /> Search
              </Button>
            </form>
          </div>
        </FormContainer>
      </Wrapper>
    </>
  );
}

export default Home;
