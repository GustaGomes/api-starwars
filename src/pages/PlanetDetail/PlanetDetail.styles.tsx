import styled from "styled-components";

export const WrapperDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  background-color: #fff;
  color: #000;
  width: 100%;
  max-width: 592px;
  height: 100%;
  max-height: 402px;
  border-radius: 0.625rem; /* 10px */
  padding: 2rem; /* 32px */
  overflow: auto;

  @media (max-width: 768px) {
    width: 95%;
    max-width: none;
  }
`;

export const ContentImage = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;
`;

export const HeadDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
`;

export const ContentPeople = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f1f1f1;
  border-radius: 8px;
  padding: 17px;
  margin-top: 9px;

  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem /* 14px */;
  }
`;

export const DivImg = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem /* 14px */;
  p {
    font-weight: 400;
  }
  span {
    font-weight: 700;
  }
`;

export const DivData = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.875rem /* 14px */;
  height: 100%;
  justify-content: space-evenly;
  div {
    display: flex;
    align-items: center;
    font-weight: 700;
  }
  span {
    font-weight: 400;
  }
`;

export const BackButton = styled.div`
  display: flex;
  color: #fff;
  background-color: transparent;
  border: none;
  width: 592px;
  cursor: pointer;
  justify-content: flex-end;
  font-weight: 500;

  @media (max-width: 768px) {
    width: 95%;
    max-width: none;
  }
`;
