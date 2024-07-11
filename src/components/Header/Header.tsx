import React from "react";

import { HeaderContent } from "./Header.styles";
import headWeb from "../../assets/head-web.png";
import logMobile from "../../assets/logMobile.png";

function HeaderComponent() {
  const isMobile = window.innerWidth <= 767;

  return (
    <HeaderContent>
      <p>Planet search</p>
      {isMobile ? (
        <img src={logMobile} alt="Logo para celular" />
      ) : (
        <img src={headWeb} alt="Logo para web" />
      )}
    </HeaderContent>
  );
}

export default HeaderComponent;
