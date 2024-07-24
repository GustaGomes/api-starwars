import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import GlobalStyle from "./styles/global";
import FooterComponent from "./components/Footer/Footer";
import HeaderComponent from "./components/Header/Header";
import { AppProvider } from "./context/planetsContext";
import WrapperComponent from "./components/Wrapper/Wrapper";

const App: React.FC = () => {
  return (
    <Fragment>
      <AppProvider>
        <WrapperComponent />
      </AppProvider>
      <GlobalStyle />
    </Fragment>
  );
};

export default App;
