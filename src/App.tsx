import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import GlobalStyle from "./styles/global";
import WrapperComponent from "./components/Wrapper/Wrapper";
import FooterComponent from "./components/Footer/Footer";
import HeaderComponent from "./components/Header/Header";
import { AppProvider } from "./context/planetsContext";

const App: React.FC = () => {
  return (
    <Fragment>
      <WrapperComponent>
        <HeaderComponent />
        <AppProvider>
          <Outlet />
        </AppProvider>
        <FooterComponent />
      </WrapperComponent>
      <GlobalStyle />
    </Fragment>
  );
};

export default App;
