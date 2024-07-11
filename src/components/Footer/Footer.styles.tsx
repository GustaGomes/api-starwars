import styled from "styled-components";

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
