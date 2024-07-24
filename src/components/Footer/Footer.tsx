import React from "react";
import { FooterContent, Img } from "./Footer.styles";

function FooterComponent() {
  return (
    <FooterContent>
      <p>
        STARUARS LTDA | CNPJ: 77.777.777/0007-07 | 2023 | Todos os direitos
        reservados
      </p>
      <span>|</span>
      <Img />
    </FooterContent>
  );
}

export default FooterComponent;
