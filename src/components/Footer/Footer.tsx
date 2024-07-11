import React from "react";

import { FooterContent } from "./Footer.styles";
import logoWeb from "../../assets/logo-web.png"; // Corrected file name
import logoMob from "../../assets/logo-mob.png"; // Corrected file name

function FooterComponent() {
  const isMobile = window.innerWidth <= 767;

  return (
    <FooterContent>
      <p>
        STARUARS LTDA | CNPJ: 77.777.777/0007-07 | 2023 | Todos os direitos
        reservados
      </p>
      <span>|</span>
      {isMobile ? (
        <img src={logoMob} alt="Logo para celular" />
      ) : (
        <img src={logoWeb} alt="Logo para web" />
      )}
    </FooterContent>
  );
}

export default FooterComponent;
