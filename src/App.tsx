import React, { Fragment } from "react";
import GlobalStyle from "./styles/global";
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
