import React from "react";
import { WrapperContent } from "./Wrapper.styles";
import HeaderComponent from "../Header/Header";
import { Outlet } from "react-router-dom";
import FooterComponent from "../Footer/Footer";

function WrapperComponent() {
  // return <WrapperContent>{children}</WrapperContent>;
  return (
    <WrapperContent>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </WrapperContent>
  );
}

export default WrapperComponent;
