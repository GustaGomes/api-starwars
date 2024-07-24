import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  height: 100%;
  max-height: 402px;
  border-radius: 0.625rem; /* 10px */

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: none;
  }
`;

export const WrapperContent = styled.div`
  flex: 1;
  height: 100%;
  background-size: cover;
  border-radius: 0.625rem; /* 10px */
  position: relative;

  @media (max-width: 768px) {
    /* width: 95%;
    max-width: none; */
    img {
      width: 300px;
      height: 188px;
      margin-bottom: -4px;
      border-radius: 8px;
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* flex: 1; */
  min-height: 25rem; /* 400px */
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 0.625rem; /* 10px */
  font-size: 1.25rem; /* 20px */

  p {
    text-align: center;
    line-height: 1.5237rem; /* 24.38px */
  }

  input {
    width: 100%;
    text-align: center;
    height: 2.5rem; /* 40px */
    border-radius: 0.3125rem; /* 5px */
    border: none;
    margin-top: 1.5rem;
  }

  @media (max-width: 768px) {
    min-height: auto;
    max-width: 300px;
    font-size: 1.125rem; /* 18px */

    div {
      padding: 3rem;
      display: contents;
    }

    p {
      margin-top: 1.875rem;
    }

    input {
      font-size: 0.875rem; /* 14px */
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 2.5rem; /* 40px */
  border-radius: 0.3125rem; /* 5px */
  margin-top: 7px;
  background-color: #de1212;
  color: #fff;
  border: none;
  gap: 0.625rem; /* 10px */
`;

export const DivNav = styled.div`
  position: absolute;
  top: 210px;
  right: 86px;
  width: 462px;
  height: 328px;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    width: 323px;
    height: 229px;
    top: 34px;
    left: 60px;
  }
`;

export const ResponsiveForm = styled.div`
  padding: 3rem;
`;

// export const ResponsiveContainer = styled.div`
//   display: flex;
//   align-items: center;
//   background-color: transparent;
//   gap: 1rem;
//   font-size: 15px;

//   @media (min-width: 768px) {
//     flex-direction: row;
//     padding: 1rem;
//   }
// `;

export const FilterSelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 14px;

  select {
    padding: 0.5rem;
    background: transparent;
    color: #fff;
    border: none;
  }
  select:focus-visible {
    color: #000;
  }
`;
