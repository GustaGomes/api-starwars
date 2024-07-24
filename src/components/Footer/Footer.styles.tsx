import styled from "styled-components";
import logoWeb from "../../assets/logo-web.png";
import logoMob from "../../assets/logo-mob.png";

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  height: 88px;
  background-color: #fff;
  width: 100%;
  gap: 3.75rem; /* 60px */

  p {
    font-size: 0.875rem; /* 14px */
  }

  @media (max-width: 767px) {
    height: 66px;
    p {
      display: none;
    }

    span {
      display: none;
    }
  }
`;

export const Img = styled.div`
  background: url(${logoWeb}) no-repeat center;
  width: 84.19px;
  height: 37.55px;

  @media (max-width: 767px) {
    background: url(${logoMob}) no-repeat center;
    width: 55.04px;
    height: 24.55px;
  }
`;
