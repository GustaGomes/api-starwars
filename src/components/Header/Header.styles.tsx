import styled from "styled-components";
import starwarsWebHeader from "../../assets/head-web.png";
import starwarsMobHeader from "../../assets/head-mobile.png";

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: transparent;

  p {
    font-size: 1rem; /* 16px */
    margin-bottom: 1.0625rem; /* 17px */
  }

  @media (max-width: 767px) {
    margin-top: 4.5625rem;
    /* height: 66px; */
    height: 127.33px;
    p {
      font-size: 0.875rem; /* 14px */
      margin-bottom: 0.6875rem; /* 11px */
    }
  }
`;

export const Img = styled.div`
  background: url(${starwarsWebHeader}) no-repeat center;
  height: 143.41px;
  width: 321.55px;

  @media (max-width: 767px) {
    background: url(${starwarsMobHeader}) no-repeat center;
    height: 93.33px;
    width: 209.26px;
  }
`;
