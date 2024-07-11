import styled from "styled-components";

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
    height: 66px;
    p {
      font-size: 0.875rem; /* 14px */
      margin-bottom: 0.6875rem; /* 11px */
    }
  }
`;
